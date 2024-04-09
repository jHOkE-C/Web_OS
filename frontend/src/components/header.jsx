import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
function header() {
  return (
    <HeaderContainer>
        <header class="headerCss">  
            <div id="logo">
                <h4 id="h4_especial">A</h4>
                <h4 class="h4_logo">S</h4>
                <h4 class="h4_logo">T</h4>
                <h4 class="h4_logo">R</h4>
                <h4 class="h4_logo">E</h4>
                <h4 class="h4_logo">A</h4>
            </div>
            <div id="navegation">
                <Link to="/">Inicio</Link>
                <Link to="/Nosotros">Nosotros</Link>
                <Link to="/Contacto">Contacto</Link>
                <div id="botones">
                    <Link to="/Login"className="buttonN">Iniciar</Link>
                    <Link className="buttonN"> Unete </Link>
                </div>
            </div>
        </header>
    </HeaderContainer>
  )
}

export default header

const HeaderContainer = styled.nav`
    h4.h4_logo{
        display: inline;
        padding-left: 8px;
        font-family: 'ralewayB';
        color: #F57D0D;
    }
    h4#h4_especial{
        display: inline;
        padding-left: 30px;
        font-family: 'ralewayB';
        color: #F57D0D;
    }
    a{
        color: #636363;
        font-family: 'raleway';
        font-size:small;
        text-decoration: none;
    }
    a#a_especial{
        color: #F57D0D;
        font-family: 'raleway';
        text-decoration: none   ;
    }
    .headerCss{
        display: flex;
        background: #C7CAB6;
        border: 1px solid #636363;
        width: calc(97vw);
        height: calc(9vh);
        align-items: center;
        margin: 1%;
    }
    #logo{
        align-items:center;
        align-content: center;
        width: 80%;
        height: 50%;
    }
    #navegation{
        display: flex;
        width: 40%;
        height: 50%;
        gap: 40px;
        align-items:center;
        align-content: center   ;
    }
    #botones{
        display: flex;
        width: 100%;
        height: 100%;
        gap: 10px;
        align-items:center;
        align-content: center   ;
    }

    a:hover{
        color: #F57D0D;
    }
    a#a_especial:hover{
        color: #636363;
    }
    .buttonN{
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 2%;
      padding-bottom: 2%;
      height: auto;/*(para que tenga fijo el height)*/
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