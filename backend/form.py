from flask import Blueprint, request, session, jsonify
from baseDeDatosFinal import *

form_bp = Blueprint('form', __name__)

@form_bp.route('/obtener_colegios', methods=['GET'])
def obtener_colegios():
    try:
        colegios = Colegio.select()
        colegios_info = [{
            'id': colegio.id,
            'nombre': colegio.nombre,
            'nivel': colegio.nivel,
            'hora_ingreso': colegio.hora_ingreso.strftime('%H:%M') if colegio.hora_ingreso else None,
            'hora_salida': colegio.hora_salida.strftime('%H:%M') if colegio.hora_salida else None,
            'latitud': colegio.coordenadas.latitud,
            'longitud': colegio.coordenadas.longitud
        } for colegio in colegios]
        return jsonify(colegios_info), 200
    except Exception as e:
        return jsonify({'mensaje': f'Error al obtener la información de los colegios: {str(e)}'}), 500


@form_bp.route('/obtener_hijos', methods=['GET'])
def obtener_hijos():
    try:
        if 'padre_id' in session:
            usuario_id = session['padre_id']
            
            # Filtrar los hijos que tienen tieneRuta igual a False
            hijos = Estudiante.select().where((Estudiante.padre_id == usuario_id) & (Estudiante.tieneRuta == False))
            
            hijos_data = [{
                'id' : hijo.id,
                'nombre': hijo.nombre,
                'apellido': hijo.apellido,
                'colegio': hijo.colegio.nombre if hijo.colegio else None, 
                'latitud': hijo.coordenadas.latitud if hijo.coordenadas else None,
                'longitud': hijo.coordenadas.longitud if hijo.coordenadas else None
            } for hijo in hijos]
            
            # Return the data as JSON
            return jsonify(hijos_data)
            
    except Exception as e:
        # Handle exceptions appropriately
        print(e)
        return jsonify({'error': 'Internal Server Error'}), 500



@form_bp.route('/form_registrar_alumno', methods=['POST'])
def guardarAlumno():
    try:
        data = request.get_json()
        # Asegurarse de que el usuario esté autenticado
        if 'padre_id' in session:
            usuario_id = session['padre_id']

            # Obtener el usuario padre actual de la base de datos
            padre = Padre.get(Padre.id == usuario_id)

            # Recibir datos del formulario del hijo
            nombre = data.get('nombre')
            apellido = data.get('apellido')
            colegio_nombre = data.get('colegio')  # Assume colegio name is sent
            latitud = data.get('latitud')
            longitud = data.get('longitud')

            # Check if all required fields are present
            if not all([nombre, apellido, colegio_nombre, latitud, longitud]):
                return jsonify({'mensaje': 'Faltan campos obligatorios'}), 400

            # Get or create Colegio object
            colegio, created = Colegio.get_or_create(nombre=colegio_nombre)

            # Crear coordenadas
            coordenadas = Coordenadas.create(
                latitud=latitud,
                longitud=longitud
            )

            # Crear y guardar al hijo en la base de datos relacionándolo con el padre
            estudiante = Estudiante.create(
                nombre=nombre,
                apellido=apellido,
                padre=padre,
                sexo = '',
                aceptado = True,  # Relacionar al hijo con el padre
                colegio=colegio,  # Relacionar al estudiante con el colegio
                coordenadas=coordenadas  # Relacionar al estudiante con las coordenadas
            )

            return jsonify({'mensaje': 'Hijo registrado correctamente'})
        else:
            return jsonify({'mensaje': 'Usuario no autenticado'}), 401
    except Exception as e:
        return jsonify({'mensaje': f'Error al registrar al hijo: {str(e)}'}), 500
