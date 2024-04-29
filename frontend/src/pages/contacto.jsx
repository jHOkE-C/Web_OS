import React from 'react';
import Header from '../components/header';

function contacto() {
  return (
    <div>
      <Header></Header>
      <div>
        {/* Enlace de contacto */}
        <a href="https://tusitio.com/contacto">¡Contáctanos!</a>
      </div>
      <div>
        {/* Espacio para la imagen del código QR de contacto */}
        <img src="ruta_a_tu_imagen_QR" alt="Código QR de contacto" />
      </div>
    </div>
  );
}

export default contacto;