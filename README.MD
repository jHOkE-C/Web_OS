# ASTREA

Web de Servicio de transporte estudiantil puerta a puerta, desarollado con Python backend, SQLite, ReactJS, los padres podran crearse cuentas y registrar a sus hijos para ser habilidados en las posibles rutas que los administradores creen, los conductores podran ver su ruta y se le dara un google directions de cada punto al que debe ir.

## Tabla de Contenidos
1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)
3. [Uso](#uso)
4. [Instalacion con Docker](#Instalacion con Docker)
## Requisitos Previos

Lista de las dependencias y software necesario para correr tu proyecto.

- [Node.js](https://nodejs.org/) v14 o superior
- [Git](https://git-scm.com/)
- [Python](https://www.python.org/) v3.12.3
- [pip](https://www.python.org/)  v24
- Tener una [API KEY](https://developers.google.com/maps/documentation/javascript/controls) google con javascript maps y routes activado 


## Instalación

Pasos detallados sobre cómo instalar y configurar el proyecto.

1. Clona el repositorio:
    ```bash
    https://github.com/jHOkE-C/Web_OS.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd Web_Os
    ```
3. Navega al directorio del FrontEnd:
    ```bash
    cd frontend 
    ```
4. Instala las dependencias:
    ```bash
    npm install
    ```
5. Configura las variables de entorno:
    - ve a las carpetas marcadas con verde
    - Agrega la apis keys que tengas en la seccion roja marcada en las imagenes:
[![Screenshot-2024-06-17-162736.jpg](https://i.postimg.cc/50VD7P5w/Screenshot-2024-06-17-162736.jpg)](https://postimg.cc/PLS6NQRx)
y la misma en:
[![Screenshot-2024-06-17-165327.jpg](https://i.postimg.cc/Jn30vdfm/Screenshot-2024-06-17-165327.jpg)](https://postimg.cc/r0mqtgyY)
    
6. Navega al directorio del backend en el proyecto
    ```bash
    cd ..
    cd backend
    ```
7. Instalacion dependencias Backend
    - pip install -U Flask
    - pip install peewee
    - pip install -U flask-cors

## Uso

Instrucciones básicas sobre cómo ejecutar el proyecto.

1. Para iniciar la coneccion con la Backend-frontend-BD
    ```bash
    python .\prueba.py
    ```
2. Para iniciar el servidor de desarrollo:
    ```bash
    npm start
    ```
3. Abre tu navegador en `http://localhost:3000`

## Instalacion con Docker

1. En la carpeta raiz del proyecto, escribir el siguiente comando:
    ```cmd
    docker compose -d
    ```

