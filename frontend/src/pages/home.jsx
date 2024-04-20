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
              <h1 class="titleMain">ASTREA</h1>
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
                  <h1 class="h1Preg">¿Por Que usar </h1>
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
      font-family: 'raleway';
      display: inline;
      color: #F57D0D;
      font-size: calc(3vw + .8em);
      letter-spacing: 2vw;
      padding-left: 0.5em;
      padding-bottom: 0px;
  }

  p.pTitle{
      font-family: 'nunitoN';
      color: #636363;
      padding-left: 1.5em;
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
  /*-------------------FOOOTER------------------------*/
  h1.h1Preg{
      font-family: 'raleway';
      display: inline;
      color: #636363;
      padding-left: 2em;
  }
  h1.h1PregNaranja{
      font-family: 'raleway';
      display: inline;
      color: #F57D0D;
  }
  .divFinal{
      display: block;
      width: calc(97vw);
      height: calc(90vh);
  }
  .reco{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: calc(2vw + .8em);
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
    border: none;
    text-decoration: none;
    height: 60%;
    margin-left: calc(1vw + .1em);;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    background-color: #F57D0D;
    color: white;
    border-radius: calc(0.4vw + .1em);
      -webkit-border-radius: calc(0.4vw + .1em);
      -moz-border-radius: calc(0.4vw + .1em);
      -ms-border-radius: calc(0.4vw + .1em);
      -o-border-radius: calc(0.4vw + .1em);
    font-family: 'ralewayB';
    font-size: calc(1vw + .1em);
  }
  .buttonN:hover{
      background-color:#636363;
      color: #F57D0D;
      transition-duration: 200ms;
  }
  .buttonN:active{
      border: #F57D0D 4px solid;
  }
`