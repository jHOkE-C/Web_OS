import datetime
from flask import Blueprint, request, session, jsonify
from baseDeDatosFinal import *

funciones_bp = Blueprint('funciones', __name__)

@funciones_bp.route('/form_Registrar_Colegio', methods=['POST'])
def guardarColegio():
    try:
        data = request.get_json()
        
        # Verificar que data es una lista
        if not isinstance(data, list):
            return jsonify({'mensaje': 'Datos malformados, se esperaba una lista de objetos JSON'}), 400

        for item in data:
            nombre = item.get('Colegio')
            nivel = item.get('Nivel')
            hora_ingreso = item.get('Entrada')
            hora_salida = item.get('Salida')
            latitud = item.get('Latitud')
            longitud = item.get('Longitud')

            # Verificar que todos los campos requeridos estén presentes
            if not all([nombre, nivel, latitud, longitud]):
                return jsonify({'mensaje': f'Faltan campos obligatorios para el colegio {nombre}'}), 400

            # Convertir las horas de ingreso y salida a objetos de tiempo, si se proporcionan
            hora_ingreso = datetime.datetime.strptime(hora_ingreso, '%H:%M').time() if hora_ingreso else None
            hora_salida = datetime.datetime.strptime(hora_salida, '%H:%M').time() if hora_salida else None

            # Crear las coordenadas
            coordenadas = Coordenadas.create(
                latitud=latitud,
                longitud=longitud
            )

            # Crear el colegio y asociar las coordenadas
            colegio = Colegio.create(
                nombre=nombre,
                nivel=nivel,
                hora_ingreso=hora_ingreso,
                hora_salida=hora_salida,
                coordenadas=coordenadas
            )

        return jsonify({'mensaje': 'Colegios registrados correctamente'})
    except Exception as e:
        return jsonify({'mensaje': f'Error al registrar los colegios: {str(e)}'}), 500

@funciones_bp.route('/form_registrar_alumnos', methods=['POST'])
def guardarAlumnos():
    try:
        data = request.get_json()
        # Asegurarse de que el usuario esté autenticado
        if 'padre_id' in session:
            usuario_id = session['padre_id']

            # Obtener el usuario padre actual de la base de datos
            padre = Padre.get(Padre.id == usuario_id)

            # Crear una lista para almacenar los estudiantes registrados
            estudiantes_registrados = []

            # Iterar sobre los datos de los estudiantes en la lista
            for alumno_data in data:
                # Recibir datos del formulario del alumno
                nombre = alumno_data.get('nombre')
                apellido = alumno_data.get('apellido')
                colegio_nombre = alumno_data.get('colegio')
                latitud = alumno_data.get('latitud')
                longitud = alumno_data.get('longitud')

                # Verificar si faltan campos obligatorios
                if not all([nombre, apellido, colegio_nombre, latitud, longitud]):
                    return jsonify({'mensaje': 'Faltan campos obligatorios'}), 400

                # Obtener o crear objeto Colegio
                colegio, created = Colegio.get_or_create(nombre=colegio_nombre)

                # Crear coordenadas
                coordenadas = Coordenadas.create(
                    latitud=latitud,
                    longitud=longitud
                )

                # Crear y guardar al estudiante en la base de datos relacionándolo con el padre
                estudiante = Estudiante.create(
                    nombre=nombre,
                    apellido=apellido,
                    padre=padre,
                    sexo='',  # Ajusta según sea necesario
                    aceptado=True,
                    colegio=colegio,
                    coordenadas=coordenadas
                )

                # Agregar el estudiante registrado a la lista
                estudiantes_registrados.append({
                    'nombre': nombre,
                    'apellido': apellido,
                    'colegio': colegio_nombre,
                    'latitud': latitud,
                    'longitud': longitud
                })

            return jsonify({'estudiantes_registrados': estudiantes_registrados})
        else:
            return jsonify({'mensaje': 'Usuario no autenticado'}), 401
    except Exception as e:
        return jsonify({'mensaje': f'Error al registrar los estudiantes: {str(e)}'}), 500

@funciones_bp.route('/registrar_ruta', methods=['POST'])
def registrarRuta():
    # Obtener los datos de la solicitud POST
    data = request.json

    # Supongamos que los datos esperados son el nombre de la ruta, el estado de regreso, 
    # una lista de IDs de estudiantes, el ID del colegio y el ID del turno.
    nombre_ruta = data.get('nombre')
    es_de_regreso = data.get('es_de_regreso')
    estudiantes_ids = data.get('estudiantes_ids', [])
    colegio_id = data.get('colegio_id')

    # Crear la nueva ruta
    nueva_ruta = Ruta.create(nombre=nombre_ruta, es_de_regreso=es_de_regreso, colegio=colegio_id)

    # Asociar cada estudiante a la ruta usando la tabla de relación EstudianteRuta
    for estudiante_id in estudiantes_ids:
        estudiante_ruta = EstudianteRuta.create(estudiante=estudiante_id, ruta=nueva_ruta)

    # Devolver una respuesta de éxito
    return jsonify({'message': 'Ruta registrada correctamente'}), 200

@funciones_bp.route('/ruta/<int:ruta_id>', methods=['GET'])
def mostrarRuta(ruta_id):
    # Obtener la ruta especificada por ruta_id
    ruta = Ruta.get_or_none(Ruta.id == ruta_id)

    if ruta:
        # Construir la respuesta que incluye información sobre la ruta y sus estudiantes
        ruta_info = {
            'id': ruta.id,
            'nombre': ruta.nombre,
            'es_de_regreso': ruta.es_de_regreso,
            'colegio': {
                'id': ruta.colegio.id,
                'nombre': ruta.colegio.nombre
            },
            'estudiantes': []
        }

        # Obtener información de cada estudiante asociado a la ruta
        for estudiante_ruta in EstudianteRuta.select().where(EstudianteRuta.ruta == ruta):
            estudiante = estudiante_ruta.estudiante
            estudiante_info = {
                'id': estudiante.id,
                'nombre': estudiante.nombre,
                'apellido': estudiante.apellido,
                'sexo': estudiante.sexo,
                'aceptado': estudiante.aceptado,
            }
            ruta_info['estudiantes'].append(estudiante_info)

        # Devolver la información de la ruta con sus estudiantes y colegio
        return jsonify({'ruta': ruta_info}), 200
    else:
        # Devolver un mensaje de error si la ruta no existe
        return jsonify({'error': 'La ruta especificada no existe'}), 404
