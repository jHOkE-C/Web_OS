import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImgMenu from '../assents/svg/menu.svg';

function Header() {
  useEffect(() => {
    const checkbox = document.getElementById('menu');

    const handleScroll = () => {
      if (checkbox.checked) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    checkbox.addEventListener('change', handleScroll);
    return () => {
      checkbox.removeEventListener('change', handleScroll);
      document.body.style.overflow = 'auto'; // Ensure scroll is enabled when component unmounts
    };
  }, []);

  return (
    <HeaderContainer>
      <header id="headerCss">  
        <div id="logo">
          <h1 id="h4_especial">ASTREA</h1>
        </div>
        <input type="checkbox" id="menu" className="menuP" />
        <label htmlFor="menu" className="menuButton">
          <img src={ImgMenu} alt="Menú" />
        </label>
        <div className="navegation">
          <Link to="/" className="linksHeader">Inicio</Link>
          <Link to="/Nosotros" className="linksHeader">Nosotros</Link>
          <Link to="/Contacto" className="linksHeader">Contacto</Link>
          <Link to="/Login" className="buttonN">Iniciar</Link>
          <Link className="buttonN">Únete</Link>
        </div>
      </header>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.nav`
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

  #headerCss {
    width: calc(98vw);
    height: calc(9vh);
    align-content: center;
    justify-content: center;
  }
  .navegation{
    display: inline;
  }
  #logo {
    display: inline;
    margin-right: calc(48vw + .7em);
  }

  #h4_especial {
    letter-spacing: 1vw;
    font-family: 'ralewayB';
    font-weight: bold;
    display: inline;
    padding-left: calc(0.3vw + .5em);
    color: #F57D0D;
    font-size: calc(1vw + .4em);
  }

  .linksHeader {
    margin-right: calc(3vw + .5em);
    text-decoration: none;
    font-family: 'nunitoN';
    color: #636363;
    font-size: calc(1vw + .1em);
  }

  .linksHeader:hover {
    color: #F57D0D;
  }

  .buttonN {
    text-decoration: none;
    margin-left: calc(1vw + .1em);
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    background-color: #F57D0D;
    color: white;
    border-radius: calc(0.4vw + .1em);
    font-family: 'ralewayB';
    font-size: calc(1vw + .1em);
  }

  .buttonN:hover {
    background-color: #636363;
    color: #F57D0D;
    transition-duration: 200ms;
  }

  .buttonN:active {
    border: #F57D0D 4px solid;
  }

  .menuP {
    display: none;
  }

  .menuButton {
    display: none;
  }

  @media only screen and (max-width: 500px) {
    width: 95vw;

    #headerCss {
      display: flex;
      width: 95vw;
      align-items: center;
      justify-content: center;
    }

    #h4_especial {
      font-size: larger;
    }

    .navegation {
      height: 120%;
      width: 100vw;
      position: absolute;
      display: block;
      left: -100%;
      top: 100px;
      z-index: 1;
      border: #636363 1px solid;
    }

    .linksHeader {
      margin-left: 10vw;
      margin-top: 10vw;
      margin-bottom: 10vw;
      display: block;
      font-size: 1.2rem;
    }

    .buttonN {
      padding: 3vw;
      margin-left: 2.5rem;
      font-size: 1.2rem;
    }

    .menuP {
      display: none;
    }

    .menuButton {
      display: inline;
    }

    .menuP:checked + .menuButton + .navegation {
      left: 0;
      background-color: #C7CAB6;
    }
  }
`;
