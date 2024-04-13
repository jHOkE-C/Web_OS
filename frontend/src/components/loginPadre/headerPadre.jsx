import React from 'react'
import {Link}from 'react-router-dom'
import styled from 'styled-components'
function headerPadre() {
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
          <Link to="/ListaDeHijos" className='linksHeader'>Lista de Hijos</Link>
          <Link to="/Perfil" className="buttonN">Perfil</Link>
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
  align-items: center;
  justify-content: center;
  align-content: center;
  background: #C7CAB6;
  border: 1px solid #636363;
  margin: 0.5em;
  #headerCss{
    width: 100%;
    height: 100%;
    background-color: black;
    align-content: center;
    justify-content: center;
  }
  #logo{
    width: 20%;
    background-color: #636363;
    display: inline;
  }
  #navegation{
    width: 1000px;
    background-color: #F57D0D;
    display: inline;
  }
  #h4_especial{
    display: inline;
    padding-left: calc(0.3vw + 0.5em);
    color: #F57D0D;
    font-size: calc(0.3vw + 1em);
  }
  .h4_logo{
    display:inline;
    padding-left: calc(0.3vw + 0.5em);
    color: #F57D0D;
    font-size: calc(0.3vw + 1em);
  }
  .linksHeader{
    text-decoration: none;
    color: #636363;
  }
`