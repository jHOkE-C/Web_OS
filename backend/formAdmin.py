from flask import Blueprint, request, session, jsonify
from baseDeDatosFinal import *

formAdmin_bp = Blueprint('formAdmin', __name__)

@formAdmin_bp.rote('/obtener_colegios', methods=['POST'])
def guardarRuta():
    return 1