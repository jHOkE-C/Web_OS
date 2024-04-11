from baseDeDatos import *
from peewee import *




#db = SqliteDatabase('./../AstreaBaseDeDatos.db')
db = SqliteDatabase('AstreaBaseDeDatos.db')
db.connect()

tablas= db.get_tables()

def obtener_correo_y_contrasena():
    datos = Padre.select(Padre.correo, Padre.contrasena).execute()
    return list(datos)

resultados = obtener_correo_y_contrasena()
for resultado in resultados:
    print(resultado.correo, resultado.contrasena)

# def getDatos():


db.close()