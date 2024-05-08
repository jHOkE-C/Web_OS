import React, { Fragment } from 'react';
import whatsg from '../../img/whats.png';
import face from '../../img/face.png';
import instag from '../../img/insta.jpg';
import telegram from '../../img/telegram.png';
import Header from '../../components/header';

function Contacto() {
  return (
    <Fragment>
      <Header />
      <div className="contacto">
        <div className="contacto-item">
          <a href="https://wa.me/qr/FP7FVFKSYY5KJ1">¡Contáctanos!</a>
          <img src={whatsg} alt="Código QR de contacto" />
        </div>

        <div className="contacto-item">
          <a href="https://www.facebook.com/profile.php?id=100091933371189&mibextid=JRoKGi">Facebook</a>
          <img src={face} alt="Código QR de Facebook" />
        </div>

        <div className="contacto-item">
          <a href="https://www.instagram.com/invites/contact/?i=j2151vow2z4s&utm_content=zc4tr2">Instagram</a>
          <img src={instag} alt="Código QR de Instagram" />
        </div>

        <div className="contacto-item">
          <a href="https://t.me/PaulPadillaTorrico">Telegram</a>
          <img src={telegram} alt="Código QR de Telegram" />
        </div>

        <p style={{ color: 'black', textAlign: 'center' }}>Para más información sobre nuestros servicios, contáctanos al teléfono XXX-XXX-XXX o visita nuestra oficina en la calle XYZ, Cochabamba, Bolivia.</p>
      </div>
    </Fragment>
  );
}

export default Contacto;

