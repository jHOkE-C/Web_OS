from baseDeDatos import *
from peewee import *




#db = SqliteDatabase('./../AstreaBaseDeDatos.db')
db = SqliteDatabase('AstreaBaseDeDatos.db')
db.connect()

def obtener_datos_padre_y_hijos(correo, contrasena):
    try:
        # Busca al padre por su correo y verifica la contraseña
        padre = Padre.get(Padre.correo == correo, Padre.contrasena == contrasena)

        # Verifica si el padre tiene hijos
        tiene_hijos = padre.hijos.count() > 0

        # Convierte los datos del padre a un diccionario
        datos_padre = {
            'id': padre.id,
            'nombre': padre.nombre,
            'apellido': padre.apellido,
            'correo': padre.correo,
            'telefono': padre.telefono,
            'tiene_hijos': tiene_hijos
        }

        return datos_padre
    except Padre.DoesNotExist:
        return None

print(obtener_datos_padre_y_hijos("juan@example.com","contrasena1"))

db.close()