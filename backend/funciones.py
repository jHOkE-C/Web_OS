from flask import Flask, request,session, jsonify
from peewee import *
from baseDeDatos import *
from flask_cors import CORS

# Configuración de la aplicación Flask
app = Flask(__name__)
app.config['SECRET_KEY'] = '1234567'
CORS(app,supports_credentials=True)

# Configuración de la base de datos
db = SqliteDatabase('AstreaBaseDeDatos.db')
db.connect()




def obtener_datos_padre_y_hijos(correo, contrasena):
    try:
        # Busca al padre por su correo y verifica la contraseña
        padre = Padre.get(Padre.correo == correo, Padre.contrasena == contrasena)

        # Obtiene todos los hijos del padre
        hijos = [{
            'nombre': hijo.nombre,
            'apellido': hijo.apellido,
            'sexo': hijo.sexo,
            'aceptado': hijo.aceptado
        } for hijo in padre.hijos]

        # Convierte los datos del padre a un diccionario
        datos_padre = {
            'id': padre.id,
            'nombre': padre.nombre,
            'apellido': padre.apellido,
            'correo': padre.correo,
            'telefono': padre.telefono,
            'hijos': hijos  # Agrega los datos de los hijos al diccionario
        }

        return datos_padre
    except Padre.DoesNotExist:
        return None


@app.route('/login', methods=['POST'])
def loginPadre():
    try:
        data = request.get_json()
        correo = data.get('correo')
        contrasena = data.get('contrasena')
        
        # Llama a la función para obtener los datos del padre
        datos_padre = obtener_datos_padre_y_hijos(correo, contrasena)

        if datos_padre:
            # Si se encontraron los datos del padre, inicia sesión y almacena el ID en la sesión
            session['usuario_id'] = datos_padre['id']
            return jsonify({'mensaje': 'Inicio de sesion exitoso','datos_padre': datos_padre})
        else:
            return jsonify({'mensaje': 'Correo o contraseña incorrectos'})
    except Exception as e:
        return jsonify({'mensaje': f'Error interno del servidor: {str(e)}'}), 500

@app.route('/logout', methods=['GET'])
def logout():
    try:
        session.clear()
        return jsonify({'mensaje': 'Sesión cerrada correctamente'})
    except Exception as e:
        return jsonify({'mensaje': f'Error al cerrar sesión: {str(e)}'}), 500


@app.route('/formularioHijo', methods=['POST'])
def guardarAlumno():
    try:
        data = request.get_json()
        # Asegurarse de que el usuario esté autenticado
        if 'usuario_id' in session:
            usuario_id = session['usuario_id']

            # Obtener el usuario padre actual de la base de datos
            padre = Padre.get(Padre.id == usuario_id)

            # Recibir datos del formulario del hijo
            nombre = data.get('nombre')
            apellido = data.get('apellido')
            sexo = data.get('sexo')
            #aceptado = data.get('aceptado')

            # Crear y guardar al hijo en la base de datos relacionándolo con el padre
            estudiante = Estudiante.create(
                nombre=nombre,
                apellido=apellido,
                sexo=sexo,
                #aceptado=aceptado,
                padre=padre  # Relacionar al hijo con el padre
            )

            return jsonify({'mensaje': 'Hijo registrado correctamente'})
        else:
            return jsonify({'mensaje': 'Usuario no autenticado'})
    except Exception as e:
        return jsonify({'mensaje': f'Error al registrar al hijo: {str(e)}'}), 500





if __name__ == '__main__':
    app.secret_key = '123456'
    app.run(debug=False)