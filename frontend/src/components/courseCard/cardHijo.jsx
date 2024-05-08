import React from 'react';
import styled from 'styled-components';
import ImgEdit from '../../assents/img/edit.png'
import { Navigate, useNavigate } from "react-router-dom";
import SinFoto from '../../assents/img/sinFoto.jpg'
function CardHijo({ title, ide}) {
    let navigate = useNavigate()
  function nav(){
    navigate('/LoginDocente/CrearCurso',{replace:true});
    window.location.reload();
    //navegar a una form donde tenga todo los datos de ese curso
  }
  return (
    <ContainerCard>
        <div className='card' >
            <img src={SinFoto} alt="" className='card__fotoChico'/>
            <p className='card__title'>{title}</p>
            <div className='cardFondo'>
                <button type='button' className='cardFondo__edit' onClick={nav}>
                    <img src={ImgEdit} alt="" className='cardFondo__img'/>
                </button>
            </div>
        </div>
        
    </ContainerCard>
  );
}

export default CardHijo;

const ContainerCard = styled.div`
    display: inline;
    .card{
        position: relative;
        padding: 1vh;
        text-align: center;
        display: inline-block; 
        margin-top: 3%;
        margin-left: 2.5%;
        margin-right: 2.5%;
        width: 15vw;
        height: 15vw;
        background-color: #C7CAB6;
        border-radius: 1vw;
        box-shadow: 5px 5px 10px;
    }
    .card__fotoChico{
        margin-top: 4%;
        border-radius: 5%;
        height: 70%;
    }
    .cardFondo{
        border-radius: 1vw;
        display: flex;
        position: absolute;    
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
    }
    .cardFondo__edit{
        border: none;
        display: flex;
        position: relative;
        align-items: center;
        left: 36%;
        top: 40%;
        height: 28%;
        opacity: 0;
        border-radius: 1vw;
    }
    .cardFondo__img{
        opacity: 0;
    }
    .cardFondo:hover{
        transition: 500ms;
        background-color: rgba(21,41,46,0.5);
        .cardFondo__edit{
            transition: 1000ms;
            background-color: #C7CAB6;
            opacity: 1;
        }
        .cardFondo__img{
            transition: 2000ms;
            opacity: 1;
        }
        .cardFondo__edit:hover{
            transition: 100ms;
            background-color: #636363;
        }
        .cardFondo__edit:active{
            background-color: #15292E;
        }
    }
    .card__title{
        white-space: nowrap; /* Evita que el texto del párrafo salte a la siguiente línea */
        overflow: hidden; /* Oculta el contenido que se desborda del contenedor */
        text-overflow: ellipsis; /* Añade puntos suspensivos (...) al final del texto recortado */  
    }
    
`;