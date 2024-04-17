import React, { Fragment } from 'react';
import Reloj from '../img/reloj.png';
import MiniBus from '../img/minibus.png';
import Flecha from '../img/flechaAbajo.png';
import Ruta from '../img/ruta.png';
import Escudo from '../img/escudo.png';
import styled from 'styled-components'
import Header from '../components/header'
function home() {
  return (
    <Fragment>
    <Header/>
    <HomeContainer>
      <section>
          <div id="d_principal">
              <h1 class="titleMain">A</h1>
              <h1 class="titleMain">S</h1>
              <h1 class="titleMain">T</h1>
              <h1 class="titleMain">R</h1>
              <h1 class="titleMain">E</h1>
              <h1 class="titleMain">A</h1>
              <p class="pTitle">Tu trayecto seguro, nuestro compromiso constante: Transporte Escolar, Confiabilidad en Cada Viaje.</p>
          </div>

          <div class="divImg">
            <img src={MiniBus} alt="" />
          </div>

          <div class="divFlecha">
            <img src={Flecha} alt="" />
          </div>

          <div class="divFinal">
              <div>
                  <h1 class="h1Preg">¿Por Que usar</h1>
                  <h1 class="h1PregNaranja">ASTREA?</h1>
              </div>
              <div class="reco">
                  <div class="blockReco">
                      <img src={Reloj} alt="" class="imgReco"/>
                      <h3 class="textReco">Mayor Velocidad</h3>
                      <p class="pReco">Experimenta un nuevo estándar de velocidad en la gestión de tus servicios de transporte con Astrea. Eliminamos las demoras  para optimizar tu operación y llegar a tus destinos de manera rápida y eficiente.</p>
                  </div>
                  <div class="blockReco">
                      <img src={Ruta} alt="" class="imgReco"/>                  
                      <h3 class="textReco">Rutas Seguras</h3>
                      <p class="pReco">La seguridad es nuestra prioridad principal. Con nuestra plataforma de administración de minibuses, puedes confiar en que cada viaje se realiza por rutas seguras y confiables. Implementamos medidas rigurosas de control y seguimiento para garantizar que todas las rutas sean cuidadosamente planificadas y monitoreadas.</p>
                  </div>
                  <div class="blockReco">
                      <img src={Escudo} alt="" class="imgReco"/>
                      <h3 class="textReco">Conductores Verificados</h3>
                      <p class="pReco"> Nos aseguramos de que cada conductor que forme parte de nuestra red haya pasado por un riguroso proceso de selección.Con nosotros, puedes estar seguro de que tus pasajeros están en manos seguras y experimentadas, brindándoles un viaje tranquilo y confortable en todo momento.</p>
                  </div>
              </div>
              <div id="des">
                  <button type="button" class="buttonN">Descubre Mas</button>
              </div>
          </div>
      </section>
    </HomeContainer>
    </Fragment>
  );
}

export default home

const HomeContainer = styled.nav`
  #d_principal{
      width: calc(97vw);
      height: calc(30vh);
      align-items: center;
      align-content: center;
  }
  h1.titleMain{
      font-family: 'ralewayB';
      display: inline;
      color: #F57D0D;
      font-size: 50px;
      padding-left: 25px;
      padding-bottom: 0px;
  }

  p.pTitle{

      font-family: 'nunitoN';
      color: #636363;
      padding-left: 25px;
  }
  .divImg{
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(97vw);
      height: calc(50vh);
  }
  .divFlecha{
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(97vw);
  }
  .paraCentrarFlecha{
      width: 660px;
  }
  /*-------------------FOOOTER------------------------*/
  h1.h1Preg{
      font-family: 'raleway';
      display: inline;
      color: #636363;
      padding: 25PX;
  }
  h1.h1PregNaranja{
      font-family: 'raleway';
      display: inline;
      color: #F57D0D;
      padding: 0px;
  }
  .divFinal{
      display: inline;
      display: block;
      gap: 50px;
      width: calc(97vw);
      height: calc(90vh);
  }
  .reco{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      width: 100%;
      height: 90%;
  }
  .blockReco{
      background-color: #C7CAB6;
      border: 1px solid #636363;
      padding: 0px;
      text-align: center;
      width: 17%;
      height: 95%;
      border-radius: 15px;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      -ms-border-radius: 15px;
      -o-border-radius: 15px;
  }
  h3.textReco{
      font-family: 'raleway';
      color: #F57D0D;
      padding: 10px;
  }
  p.pReco{
      padding-left: 15px;
      padding-right: 15px;
      font-family: 'nunitoN';
      color: #636363;
      text-align: justify;
      font-size: 0.9rem;
  }
  .imgReco{
      padding-top: 20px;
  }
  #des{
      display: flex;
      align-content: center;
      justify-content: center ;
      height: 70px;
  }
  .buttonN{
      margin: 1%;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 10px;
      padding-bottom: 10px;
      height: 40px;/*(para que tenga fijo el height)*/
      background-color: #F57D0D;
      color: white;
      font-family: 'raleway';
      border-radius: 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      -o-border-radius: 5px;
      border: none;
  }
  .buttonN:hover{
      background-color:#636363;
      color: #F57D0D;
      transition-duration: 200ms;
  }
  .buttonN:active{
      border: #F57D0D 5px;
  }
`