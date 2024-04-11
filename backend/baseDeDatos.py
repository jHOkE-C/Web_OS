from peewee import *

db = SqliteDatabase('AstreaBaseDeDatos.db')


class Padre(Model):
    nombre = CharField()
    apellido = CharField()
    correo = CharField()
    telefono = CharField()
    contrasena = CharField()

    class Meta:
        database = db

class Estudiante(Model):
    nombre = CharField()
    apellido = CharField()
    sexo = CharField()
    aceptado = BooleanField()
    Padre = ForeignKeyField(Padre, backref='hijos', null=True)

    class Meta:
        database = db

class Cordenadas(Model):
    cordenadas_latitud = FloatField()
    cordenadas_longitud = FloatField()
    estudiante = ForeignKeyField(Estudiante,backref='cordeanadas', null= False)

    class Meta:
        database = db

class Colegio(Model):
    nombre = CharField()
    nivel_colegio = CharField()
    cordenadas_latitud = FloatField()
    cordenadas_longitud = FloatField()

    class Meta:
        database = db

class Ruta(Model):
    nombreRuta = CharField()
    esDeRegreso = BooleanField()
    colegio =ForeignKeyField(Colegio,backref='rutas',null=True)
    class Meta:
        database = db

class AlumnoRuta(Model):
    alumno = ForeignKeyField(Estudiante, backref='rutas')
    ruta = ForeignKeyField(Ruta, backref='alumnos')

    class Meta:
        database = db
        primary_key = CompositeKey('alumno', 'ruta')

class Conductor(Model):
    nombre = CharField()
    apellido = CharField()
    telefono = CharField()
    email = CharField ()
    contrasena = CharField()
    ci = CharField()
    antecedentes = TextField()

    class Meta:
        database = db
    



def suma():
    print("Hola")








db.connect()
db.create_tables([Padre,Estudiante,Cordenadas,Colegio,Ruta, AlumnoRuta,Conductor])
db.close()