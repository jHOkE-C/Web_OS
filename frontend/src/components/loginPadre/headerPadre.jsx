import React from 'react'
import {Link}from 'react-router-dom'
import styled from 'styled-components'
function headerPadre() {

  const salir = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'GET',
        credentials: 'include' // Incluir las credenciales para enviar la cookie de sesión al servidor
      });
      if (response.ok) {
        // Si la solicitud es exitosa, redirige a la página de inicio
        console.log("salida Exitosas");
      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };


  return (
    <HeaderPadreContainer>
      <header id="headerCss">  
        <div id="logo">
          <h1 id='h4_especial'>ASTREA</h1>
        </div>
        <div id="navegation">
          <Link to="/" className='linksHeader'>Inicio</Link>
          <Link to="/Nosotros" className='linksHeader'>Nosotros</Link>
          <Link to="/Contacto" className='linksHeader'>Contacto</Link>
          <Link to="/FormHijos" className='linksHeader'>Lista de Hijos</Link>
          <Link to="/Perfil" className="buttonN">Perfil</Link>
          <Link to="/" className='buttonN' onClick={salir}>Salir</Link>
        </div>
      </header>
    </HeaderPadreContainer>     
  )
}

export default headerPadre

const HeaderPadreContainer = styled.nav`
  display: flex;
  width: calc(98vw);
  height: calc(9vh);
  min-height: 60px; 
  align-items: center;
  justify-content: center;
  align-content: center;
  background: #C7CAB6;
  border: 1px solid #636363;
  margin: 0.5em;
  #headerCss{
    width: calc(98vw);
    height: calc(9vh);
    align-content: center;
    justify-content: center;
  }
  #logo{
    display: inline;
    margin-right: calc(38vw + .7em);
  } 
  #navegation{
    display: inline;
  }
  #h4_especial{
    letter-spacing: 1vw;
    font-family: 'ralewayB';
    font-weight: bold;
    display: inline;
    padding-left: calc(0.3vw + .5em);
    color: #F57D0D;
    font-size: calc(1vw + .4em);
  }
  .linksHeader{
    margin-right: calc(3vw + .5em);
    text-decoration: none;
    font-family: 'nunitoN';
    color: #636363;
    font-size: calc(1vw + .1em);
  }
  .linksHeader:hover{
    color: #F57D0D;
  }
  .buttonN{
    text-decoration: none;
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