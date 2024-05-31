import React, { useState, useEffect, Fragment } from 'react';
import {Link}from 'react-router-dom'
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assents/svg/left.svg';
import { ReactComponent as ArrowRight } from '../../assents/svg/right.svg';
import CardsHijos from '../../components/courseCard/cardHijo';
import HPadre from '../../components/loginPadre/headerPadre'
function ListaHijos() {
  const [Hijos, setHijos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [esUltimo, setEsUltimo] = useState(false)
  useEffect(() => {
    peticionDocenteHijosCreados();
  }, []);
  useEffect(() => {
    setEsUltimo((currentPage + 1) * 10 >= Hijos.length);
  }, [currentPage, Hijos.length]);
  const peticionDocenteHijosCreados = () => {
    fetch('http://localhost:5000/obtener_hijos', {
      method: 'GET',
      credentials: 'include'
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        return res.json();
      })
      .then((data) => {
        setHijos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const renderHijos = () => {
    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
    return Hijos.slice(startIndex, endIndex).map((curso) => (
      <CardsHijos key={curso.idCurso} title={curso.nombre} ide={curso.idCurso}  />
    ));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? prevPage : prevPage - 1));
  };

  return (
    <Fragment>
      <HPadre></HPadre>
      <ListaHijosContainer>
        <Link to='/FormHijos' className='buttonN'>AGREGAR HIJO +</Link>
        <br />
        <div className='cards'>
          {renderHijos()}
        </div>
        <div className='arrows'>
          
          {currentPage===0?
          <button className='arrows__flecha--apagada' >
            <ArrowLeft className='home__icon' />
          </button>
          :
          <button className='arrows__flecha' onClick={goToPreviousPage}>
            <ArrowLeft className='home__icon' />
          </button>
          }
          {esUltimo? 
          <button className='arrows__flecha--apagada'>
              <ArrowRight className='home__icon' />
          </button>
          :
          <button className='arrows__flecha' onClick={goToNextPage}>
              <ArrowRight className='home__icon' />
          </button>
          } 
        </div>
      </ListaHijosContainer>
    </Fragment>
  );
}

export default ListaHijos;

const ListaHijosContainer = styled.nav`
  width: 100vw;
  position: relative;
  min-height: 80vh;
  .cards{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }
  .arrows {
    display: flex;
    position: relative;
    justify-content: center;
    margin: 1.5%;
  }
  .arrows__flecha {
    background: none;
    margin: 0.1em;
    border: none;
  }
  .arrows__flecha svg {
    fill: #636363;
  }
  .arrows__flecha svg:hover {
    fill: black;
    transition: 100ms;
    stroke: black;
  }
  .arrows__flecha svg:active {
    fill: white;
  }
  .arrows__flecha--apagada{
    background: none;
    border: NONE;
  }
  .arrows__flecha--apagada svg {
    fill: #aaaaaa;
 
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
    font-size: calc(0.1vw + 1rem);
    margin-left: 2vw;
  }
  .buttonN:hover{
      background-color:#636363;
      color: #F57D0D;
      transition-duration: 200ms;
  }
  .buttonN:active{
      border: #F57D0D 4px solid;
  }
  @media only screen and (max-width: 500px) {
    
    .cards{
      align-content: flex-start;
      justify-content: center;
      min-height: 280vh;
    }
  }
`;