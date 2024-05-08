import React from 'react';
import Header from '../components/header';

function Contacto() {
  return (
    <div>
      <Header />
      <div>
        {/* Enlace de contacto */}
        <a href="https://wa.me/qr/FP7FVFKSYY5KJ1">¡Contáctanos!</a>
      </div>
      <div>
        {/* Espacio para la imagen del código QR de contacto */}
        <img src="C:\Users\papat\Documents\GitHub\AstreaTransport\frontend\src\img\whatsg" alt="Código QR de contacto" />
      </div>
      <div>
        {/* Enlace a la página de Facebook */}
        <a href="https://www.facebook.com/profile.php?id=100091933371189&mibextid=JRoKGi">Facebook</a>
        {/* Espacio para el código QR de Facebook */}
        <img src="C:\Users\papat\Documents\GitHub\AstreaTransport\frontend\src\img\face" alt="Código QR de Facebook" />
      </div>
      <div>
        {/* Enlace a la página de Instagram */}
        <a href="https://www.instagram.com/invites/contact/?i=j2151vow2z4s&utm_content=zc4tr2">Instagram</a>
        {/* Espacio para el código QR de Instagram */}
        <img src="C:\Users\papat\Documents\GitHub\AstreaTransport\frontend\src\img\insta" alt="Código QR de Instagram" />
      </div>
      <div>
        {/* Enlace a la página de Telegram */}
        <a href="https://t.me/PaulPadillaTorrico">Telegram</a>
        {/* Espacio para el código QR de Telegram */}
        <img src="C:\Users\papat\Documents\GitHub\AstreaTransport\frontend\src\img\telegram" alt="Código QR de Telegram" />
      </div>
    </div>
  );
}

export default Contacto;
