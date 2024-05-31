import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';
import HeaderAdmind from '../../components/loginAdmind/headerAdmind'
import MapsRutas from '../../components/maps/mapsRutas';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import jsonData from '../../font/colegios.json'
import jsonEstu from '../../font/mocks_alumnos.json'
import Swal from 'sweetalert2'

  
function CrearRutasIda() {

    //colegios
    const [allSchools, setAllSchools] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const [ida, setIda] = useState([]);
    const [estudiantes, setEstudiantes] = useState([]);
    const [colegio, setColegio] = useState({Latitud:0,Longitud:0});
    const [origin, setOrigin] = useState({
        id: -1,
        lat: 0,
        lng: 0
    });
    const [waypoints, setWaypoints] = useState([]);
    const [espejo, setEspejo] = useState([
        { id: 0, mensaje: '0,0' }
    ]);
    useEffect(()=>{
        fetch('http://localhost:5000/obtener_colegios', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response=>{
            return response.json();
        }).then(responseData =>{
            setAllSchools(responseData)
            
        })

        fetch('http://localhost:5000/obtener_hijos', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response=>{
            return response.json();
        }).then(responseData =>{
            setAllStudents(responseData)
        })
    },[])
    useEffect(()=>{
        console.log(allSchools)
    },[allSchools])
    function onChange(data){
        setIda([])
        seleccionarColegio(data)
    }
    async function seleccionarColegio(data){
        for (const colegio of allSchools) {
            if (data === colegio.nivel) {
                agregarAlSelectColegiosIda(colegio);
            }
        }
    }
    function agregarAlSelectColegiosIda(colegio){
        setIda(previus => [
            ...previus,
            colegio
        ])
    }

    function onChangeCole(colegio){
        console.log(colegio)
        let tam = ida.length
        for (let i = 0; i < tam; i++) {
            if(ida[i].nombre===colegio){
                console.log(ida[i])
                setColegio(ida[i])
            }
        }
        setEstudiantes([])
        seleccionarEstudiantes(colegio)
    }
    async function seleccionarEstudiantes(colegio){
        for (const estudiante of allStudents) {
            console.log(estudiante)
            if (colegio === estudiante.colegio) {
                handleMarkerClick(estudiante);
            }
        }
    }
    //markadores de google parra enviar a estudiante como prop a componente map
    const handleMarkerClick = (estudiante) => {
        setEstudiantes((previus)=>[
            ...previus,
            {
                nombre: estudiante.nombre,
                id: estudiante.id,
                Latitud: estudiante.latitud,
                Longitud: estudiante.longitud
            }
        ])
    };
    async function onSubmit(e) {
        try {
            const response = await fetch('http://localhost:5000/registrar_ruta', {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                destino: colegio.id,
                waypoints: waypoints,
                inicio: origin.id
              }),
            });
      
            const responseData = await response.json();
      
            if (response.ok) {
              Swal.fire({
                icon: 'success',
                text: responseData.mensaje,
                background:'#B4B7A2',
                confirmButtonColor:'#F57D0D',
              }).then(() => {
                window.location.reload();
              });
            }
          } catch (error) {
            console.error('Error:', error);
            Swal.fire({
              icon: 'error',
              text: 'Hubo un error al procesar la solicitud',
              background:'#B4B7A2',
              confirmButtonColor:'#F57D0D',
            });
          }
    }
  return (
    <Fragment>
        <HeaderAdmind></HeaderAdmind>
        <ContainerRutasIda>
            <div className='selectIzquierda'>
                <form className='selectNivel' onChange={e=>onChange(e.target.value)}>
                    <label>Nivel Colegio:</label>
                    <select className='select-customizado'>
                        <option value="n">---------------------------</option>
                        <option value="Secundaria">Secundaria</option>
                        <option value="Primaria">Primaria</option>
                        <option value="Kinder">Kinder</option>
                    </select>
                </form>
                <form className='selectCole' onChange={e => onChangeCole(e.target.value)}>
                    <label>Colegios:</label>
                    <select className='select-customizado' >
                        <option value="-">---------------------------</option>
                        {ida.map((colegio) => (
                            <option key={colegio.nombre} value={colegio.nombre}>{colegio.nombre}</option>
                        ))}
                    </select>
                </form>
            </div>

            <MapsRutas 
                estu={estudiantes} 
                colegio={colegio} 
                origin={origin} 
                setOrigin={setOrigin}
                waypoints = {waypoints}
                setWaypoints = {setWaypoints}
                espejo = {espejo}
                setEspejo = {setEspejo}
            >
            </MapsRutas>
            <form className='indicePuntosRuta' onSubmit={onSubmit}>
                <label>Punto Inicial</label>
                <input type="text" className='indicePuntosRuta__inputCords' value={""+origin.lat+", "+origin.lng}/>
                <label>Puntos Intermedios</label>
                {espejo.map((item, index) => (
                    <input
                        className='indicePuntosRuta__inputCords'
                        key={index}
                        type="text"
                        value={item && item.mensaje ? item.mensaje : 'Undefined mensaje'}
                        readOnly
                    />
                ))}
                <label>Colegio</label>
                <input type="text" className='indicePuntosRuta__inputCords' value={""+colegio.latitud+", "+colegio.longitud}/>
                <button type='submit' className='buttonN'>Guardar Ruta</button>
            </form>
        </ContainerRutasIda>
    </Fragment>
  )
}

export default CrearRutasIda
const ContainerRutasIda = styled.nav`
    display: flex;
    .select-customizado {
    background-color: #f2f2f2;
    color: #333;
    border-radius: 0.7vh;
    font-family: 'nunitoN';
    font-size: calc(0.1vw + 0.65em);
    width: 100%;
    height: 5vh;
    outline: none;
  }
  .select-customizado:active, .select-customizado:focus, .select-customizado:hover {
    border-color: #636363;
    box-shadow: 0 0 5px #f2f2f2;
  }
  .select-customizado option {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: 'nunitoN';
    background-color: #f2f2f2;
    color: #333;
    padding: 8px;
  }
    .selectIzquierda{
        margin: 1vh;
    }
    .indicePuntosRuta__inputCords{
        display: block;
        background-color: #f2f2f2;
        border:none;
        border: #636363 0.5px solid;
        width: 100%;
        height: 4vh;
        border-radius: 0.7vh;
        font-family: 'nunitoN';
    }
    .indicePuntosRuta{
        display: block;
        margin: 1vh;
    }
    label{
        display: block;
    }
    .spanA{
        font-family: 'nunitoN';
        color: red;
        margin: 0px;
        padding: 0px;
        font-size: calc(0.01vw + 0.8em);
    }
    .buttonN{
    border: none;
    margin-top: 4%;
    padding-left: 4%;
    padding-right: 4%;
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: #F57D0D;
    color: white;
    border-radius: calc(0.2vw + .1em);
      -webkit-border-radius: calc(0.2vw + .1em);
      -moz-border-radius: calc(0.2vw + .1em);
      -ms-border-radius: calc(0.2vw + .1em);
      -o-border-radius: calc(0.2vw + .1em);
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