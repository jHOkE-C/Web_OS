import React, {Fragment } from 'react'
import HeaderAdmind from '../../components/loginAdmind/headerAdmind'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function CrearRuta() {
  return (
    <Fragment>
        <HeaderAdmind></HeaderAdmind> 
        <ContainerCrearR>
            <Link to={"/CrearRutas/ida"} className="buttonN">Crear Ruta de IDA</Link>
            <Link className="buttonN">Crear Ruta de Vuelta</Link>
        </ContainerCrearR>
    </Fragment>
  )
}

export default CrearRuta

const ContainerCrearR = styled.nav`
    display: flex;
    align-content: center;
    justify-content: center;
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