from flask import Flask, request, jsonify
from peewee import *
from baseDeDatos import *
from flask_cors import CORS

# Configuración de la aplicación Flask
app = Flask(__name__)
CORS(app)

# Configuración de la base de datos
db = SqliteDatabase('AstreaBaseDeDatos.db')
db.connect()


# Función para obtener correo y contraseña
def obtener_correo_y_contrasena():
    datos = Padre.select(Padre.correo, Padre.contrasena).execute()
    datos_dict = {padre.correo: padre.contrasena for padre in datos}
    return datos_dict

# Ruta para el proceso de inicio de sesión
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    # Obtener datos del formulario de inicio de sesión
    correo = data.get("correo")
    contrasena = data.get("contrasena")
    
    # Obtener datos de correo y contraseña de la base de datos
    datos = obtener_correo_y_contrasena()

    # Verificar si las credenciales son válidas
    if correo in datos and datos[correo] == contrasena:
        return jsonify({'mensaje': 'Inicio de sesion exitoso'})
    else:
        return jsonify({'mensaje': 'Credenciales invalidas'})

if __name__ == '__main__':
    app.run(debug=False)