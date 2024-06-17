# Usar una imagen base de Python
FROM python:3.11-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /backend

# Copiar el archivo requirements.txt si lo tienes
# COPY requirements.txt ./

# Instalar las dependencias
# RUN pip install -r requirements.txt

# Copiar el resto del código de la aplicación
COPY . .

# Instalar las dependencias de la aplicación
RUN pip install --no-cache-dir flask

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["python", "prueba.py"]

