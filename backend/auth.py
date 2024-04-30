from flask import Blueprint, request, session, jsonify
from baseDeDatosFinal import *

auth_bp = Blueprint('auth', __name__)



@auth_bp.route('/auth_login_padre', methods=['POST'])
def login_Padre():
    try:
        data = request.get_json()
        correo = data.get('correo')
        contrasena = data.get('contrasena')
        
        padre = Padre.get(Padre.correo == correo, Padre.contrasena == contrasena)
        session['padre_id'] = padre.id
        return jsonify({'mensaje': 'Inicio de sesion exitoso'})
    except Padre.DoesNotExist:
        return jsonify({'mensaje': 'Nombre de usuario o contraseña incorrectos'})
    except Exception as e:
        return jsonify({'mensaje': f'Error interno del servidor: {str(e)}'}), 500

@auth_bp.route('/auth_logout_padre', methods=['GET'])
def logout_padre():
    try:
        # Verifica si el usuario está autenticado como padre
        if 'usuario_id' in session:
            # Elimina la identificación del usuario de la sesión
            session.pop('usuario_id', None)
            return jsonify({'mensaje': 'Sesión cerrada correctamente'})
        else:
            return jsonify({'mensaje': 'No hay una sesión de padre activa'}), 400
    except Exception as e:
        return jsonify({'mensaje': f'Error al cerrar sesión: {str(e)}'}), 500

@auth_bp.route('/auth_login_admin', methods=['POST'])
def login_admin():
    try:
        data = request.get_json()
        nombre_usuario = data.get('nombre_usuario')
        contrasena = data.get('contrasena')
        
        # Obtener el usuario y contraseña del administrador
        admin = Administrador()
        nombre_usuario_admin, contrasena_admin = admin.obtener_usuario_y_contrasena(nombre_usuario)

        if nombre_usuario_admin is not None and contrasena_admin is not None:
            # Si se encontraron el usuario y la contraseña, verificar si coinciden
            if contrasena == contrasena_admin:
                # Si coinciden, iniciar sesión y almacenar el nombre de usuario en la sesión
                session['nombre_usuario'] = nombre_usuario
                return jsonify({'mensaje': 'Inicio de sesión exitoso'})
            else:
                return jsonify({'mensaje': 'Nombre de usuario o contraseña incorrectos'})
        else:
            return jsonify({'mensaje': 'Nombre de usuario no encontrado'}), 404
    except Exception as e:
        return jsonify({'mensaje': f'Error interno del servidor: {str(e)}'}), 500

@auth_bp.route('/auth_logout_admin', methods=['GET'])
def logout_admin():
    try:
        # Verificar si hay una sesión de administrador activa
        if 'admin_id' in session:
            # Eliminar la identificación del administrador de la sesión
            session.pop('admin_id', None)
            return jsonify({'mensaje': 'Sesión cerrada correctamente'})
        else:
            return jsonify({'mensaje': 'No hay una sesión de administrador activa'}), 400
    except Exception as e:
        return jsonify({'mensaje': f'Error al cerrar sesión: {str(e)}'}), 500

@auth_bp.route('/auth_login_conductor', methods=['POST'])
def login_conductor():
    try:
        data = request.get_json()
        correo = data.get('correo')
        contrasena = data.get('contrasena')
        admin = Conductor.get(Conductor.email == correo, Conductor.contrasena == contrasena)
        session['conductor'] = admin.id
        return jsonify({'mensaje': 'Inicio de sesión exitoso'})
    except Administrador.DoesNotExist:
        return jsonify({'mensaje': 'Nombre de usuario o contraseña incorrectos'})
    except Exception as e:
        return jsonify({'mensaje': f'Error interno del servidor: {str(e)}'}), 500

@auth_bp.route('/auth_logout_conductor', methods=['GET'])
def logout_conductor():
    try:
        if 'conductor' in session:
            session.pop('conductor', None)
            return jsonify({'mensaje': 'Sesión cerrada correctamente'})
        else:
            return jsonify({'mensaje': 'No hay una sesión de administrador activa'}), 400
    except Exception as e:
        return jsonify({'mensaje': f'Error al cerrar sesión: {str(e)}'}), 500