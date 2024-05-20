import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';
import HeaderAdmind from '../../components/loginAdmind/headerAdmind'
import MapsRutas from '../../components/maps/mapsRutas';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import jsonData from '../../font/colegios.json'
import jsonEstu from '../../font/mocks_alumnos.json'

const schema = yup.object({
    level: yup.mixed('Seleccione un nivel').oneOf(['Secundaria', 'Primaria', 'Kinder'])
            .required('Seleccione un nivel')
  }).required()
  
function CrearRutasIda() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    //colegios
    
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
        "0,0","0,0","0,0","0,0","0,0","0,0","0,0","0,0","0,0","0,0","0,0","0,0","0,0"
    ])
    function onChange(data){
        if(!errors.level){
            pedidoJson(data).then((resultado)=>{
                setIda([])
                resultado.forEach((colegio)=>{
                    agregarAlSelectColegiosIda(colegio);
                })
            }).catch((error)=>{
                console.error(error)
            })           
        }
    }
    async function pedidoJson(data){
        return new Promise((resolve, reject)=>{
            try {
                let elegidos = []
                for (const colegio of jsonData) {
                    if (data.level === colegio.Nivel) {
                        elegidos.push(colegio);
                    }
                }
                resolve(elegidos);
            } catch (error) {
                reject(error);
            }
        })
    }
    function agregarAlSelectColegiosIda(colegio){
        setIda(previus => [
            ...previus,
            colegio
        ])
    }

    function onChangeCole(colegio){
        setEstudiantes([])
        let tam = ida.length
        for (let i = 0; i < tam; i++) {
            if(ida[i].Colegio===colegio){
                setColegio(ida[i])
            }
        }

        pedidoJsonEstu(colegio).then((resultado)=>{
            resultado.forEach((estudiante)=>{
                handleMarkerClick(estudiante.Latitud, estudiante.Longitud);
            })
        }).catch((error)=>{
            console.error(error)
        })     
    }
    async function pedidoJsonEstu(colegio){
        return new Promise((resolve, reject)=>{
            try {
                let elegidos = []
                for (const estudiante of jsonEstu) {
                    if (colegio === estudiante.Colegio) {
                        elegidos.push(estudiante);
                    }
                }
                resolve(elegidos);
            } catch (error) {
                reject(error);
            }
        })
    }
    //markadorees de google
    const handleMarkerClick = (lat, lng) => {
        setEstudiantes((previus)=>[
            ...previus,
            {
                Latitud: lat,
                Longitud: lng
            }
        ])
    };

  return (
    <Fragment>
        <HeaderAdmind></HeaderAdmind>
        <ContainerRutasIda>
            <div className='selectIzquierda'>
                <form className='selectNivel' onChange={handleSubmit(onChange)}>
                    <label>Nivel Colegio:</label>
                    <select className='selectNivel__ida'
                    {...register("level")}>
                        <option value="n">---------------------------</option>
                        <option value="Secundaria">Secundaria</option>
                        <option value="Primaria">Primaria</option>
                        <option value="Kinder">Kinder</option>
                    </select>
                    <p className='spanA'>{errors.level?.message}</p>
                </form>
                <form className='selectCole' onChange={e => onChangeCole(e.target.value)}>
                    <label>Colegios:</label>
                    <select className='selectCole__ida' >
                        <option value="-">---------------------------</option>
                        {ida.map((colegio) => (
                            <option key={colegio.Colegio} value={colegio.Colegio}>{colegio.Colegio}</option>
                        ))}
                    </select>
                    <span className='spanA'>{errors.school?.message}</span>
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

            <form className='indicePuntosRuta'>
                <label>Punto Inicial</label>
                <input type="text" value={""+origin.lat+", "+origin.lng}/>
                <label>Puntos Intermedios</label>
                <input type="text" value={espejo[0]}/>
                <input type="text" value={espejo[1]}/>
                <input type="text" value={espejo[2]}/>
                <input type="text" value={espejo[3]}/>
                <input type="text" value={espejo[4]}/>
                <input type="text" value={espejo[5]}/>
                <input type="text" value={espejo[6]}/>
                <input type="text" value={espejo[7]}/>
                <input type="text" value={espejo[8]}/>
                <input type="text" value={espejo[9]}/>
                <input type="text" value={espejo[10]}/>
                <input type="text" value={espejo[11]}/>
                <input type="text" value={espejo[12]}/>
                <label>Colegio</label>
                <input type="text" value={""+colegio.Latitud+", "+colegio.Longitud}/>
            </form>
        </ContainerRutasIda>
    </Fragment>
  )
}

export default CrearRutasIda
const ContainerRutasIda = styled.nav`
    display: flex;
    .selectIzquierda{
        margin: 1vh;
        margin-right: 1vw;

    }
    .indicePuntosRuta{
        margin: 1vh;
    }
    .spanA{
        font-family: 'nunitoN';
        color: red;
        margin: 0px;
        padding: 0px;
        font-size: calc(0.01vw + 0.8em);
    }
`