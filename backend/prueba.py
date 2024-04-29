from flask import Flask
from auth import auth_bp
from form  import form_bp

app = Flask(__name__)
app.config['SECRET_KEY'] = 'tu_clave_secreta'

# Registra el Blueprint en la aplicación Flask
app.register_blueprint(form_bp)
app.register_blueprint(auth_bp)

if __name__ == "__main__":
    app.run(debug=True)
