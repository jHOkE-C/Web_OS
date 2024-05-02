from peewee import *

# Conectar a la base de datos
db = SqliteDatabase('AstreaBaseDeDatosFinal.db')

class Administrador(Model):
    nombre_usuario = CharField()
    contrasena = CharField()

    class Meta:
        database = db
        
    def obtener_usuario_y_contrasena(self, nombre_usuario):
        try:
            admin = Administrador.get(Administrador.nombre_usuario == nombre_usuario)
            return admin.nombre_usuario, admin.contrasena
        except Administrador.DoesNotExist:
            return None, None
        
class Padre(Model):
    nombre = CharField()
    apellido = CharField()
    correo = CharField(unique=True)
    telefono = CharField()
    contrasena = CharField()

    class Meta:
        database = db

class Conductor(Model):
    nombre = CharField()
    apellido = CharField()
    telefono = CharField(unique=True)  
    email = CharField(unique=True)  
    contrasena = CharField()
    ci = CharField(unique=True)  
    antecedentes = CharField()

    class Meta:
        database = db

class Coordenadas(Model):
    latitud = FloatField()
    longitud = FloatField()

    class Meta:
        database = db

class TipoBus(Model):
    tipo = CharField()
    capacidad = IntegerField()

    class Meta:
        database = db

class Colegio(Model):
    nombre = CharField(unique=True)  
    nivel = CharField()  
    hora_ingreso = TimeField(null=True)
    hora_salida = TimeField(null=True)
    coordenadas = ForeignKeyField(Coordenadas, backref='colegios')

    class Meta:
        database = db

class Estudiante(Model):
    nombre = CharField()
    apellido = CharField()
    sexo = CharField()
    foto = BlobField(null=True)
    aceptado = BooleanField()
    padre = ForeignKeyField(Padre, backref='hijos', null=True)  
    colegio = ForeignKeyField(Colegio, backref='estudiantes', null=True)
    coordenadas = ForeignKeyField(Coordenadas, backref='cordenadas', null=True)

    class Meta:
        database = db

class Bus(Model):
    placa = CharField(unique=True)  
    modelo = CharField()
    marca = CharField()
    tipo = ForeignKeyField(TipoBus, backref='buses')

    class Meta:
        database = db

class Turno(Model):
    fecha_inicio = DateField(null=True)
    fecha_fin = DateField(null=True)
    hora_ingreso = TimeField(null=True)
    hora_salida = TimeField(null=True)
    conductor = ForeignKeyField(Conductor, backref='turnos', null=True)
    bus = ForeignKeyField(Bus, backref='turnos', null=True)

    class Meta:
        database = db

class Ruta(Model):
    nombre = CharField()
    es_de_regreso = BooleanField()  
    estudiante = ForeignKeyField(Estudiante, backref='rutas', null=True)
    colegio = ForeignKeyField(Colegio, backref='rutas', null=True)
    turno = ForeignKeyField(Turno, backref='rutas', null=True)  

    class Meta:
        database = db

db.connect()
db.create_tables([Administrador, Padre, Coordenadas, TipoBus, Conductor, Colegio, Estudiante, Bus, Turno, Ruta])
db.close()
