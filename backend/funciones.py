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
