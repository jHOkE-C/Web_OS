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
          <h4 id="h4_especial">A</h4>
          <h4 class="h4_logo">S</h4>
          <h4 class="h4_logo">T</h4>
          <h4 class="h4_logo">R</h4>
          <h4 class="h4_logo">E</h4>
          <h4 class="h4_logo">A</h4>
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
  min-height: 50px;
  align-items: center;
  justify-content: center;
  align-content: center;
  background: #C7CAB6;
  border: 1px solid #636363;
  margin: 0.5em;
  #headerCss{
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
  }
  #logo{
    display: inline;
    margin-right: calc(36vw + 1em);
  }
  #navegation{
    display: inline;
  }
  #h4_especial{
    display: inline;
    padding-left: calc(0.3vw + 0.5em);
    color: #F57D0D;
    font-size: calc(0.5vw + 1em);
  }
  .h4_logo{
    display:inline;
    padding-left: calc(0.3vw + 0.5em);
    color: #F57D0D;
    font-size: calc(0.5vw + 1em);
  }
  .linksHeader{
    margin-right: calc(3vw + 1em);
    text-decoration: none;
    font-family: 'raleway';
    color: #636363;
    font-size: calc(0.1vw + 0.8em);
  }
  .buttonN{
    text-decoration: none;
    margin-left: calc(0.1vw + 0.8em);;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    background-color: #F57D0D;
    color: white;
    border-radius: calc(0.1vw + 0.3em);;
    font-family: 'raleway';
    font-size: calc(0.1vw + 0.9em);
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