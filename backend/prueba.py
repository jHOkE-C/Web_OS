from flask import Flask
from auth import auth_bp
from form  import form_bp

from flask_cors import CORS

# Configuración de la aplicación Flask
app = Flask(__name__)
app.config['SECRET_KEY'] = '1234567'
CORS(app,supports_credentials=True)

# Registra el Blueprint en la aplicación Flask
app.register_blueprint(form_bp)
app.register_blueprint(auth_bp)

if __name__ == "__main__":
    app.run(debug=True)
