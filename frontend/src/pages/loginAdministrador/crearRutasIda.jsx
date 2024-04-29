import React, { Fragment, useState } from 'react'
import styled from 'styled-components';
import HeaderAdmind from '../../components/loginAdmind/headerAdmind'
import MapsRutas from '../../components/maps/mapsRutas';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import jsonData from '../../font/colegios.json'

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

    function agregarAlSelectColegiosIda(colegio){
        setIda(previus => [
            ...previus,
            colegio
        ])
    }

    //markadorees de google
    const [markerCoordinates, setMarkerCoordinates] = React.useState(null);

    const handleMarkerClick = (lat, lng) => {
        setMarkerCoordinates({ lat, lng });
    };

  return (
    <Fragment>
        <HeaderAdmind></HeaderAdmind>
        <ContainerRutasIda>
            <div className='selectIzquierda'>
                <form className='selectNivel' onChange={handleSubmit(onChange)}>
                    <select className='selectNivel__ida'
                    {...register("level")}>
                        <option value="n">---------------------------</option>
                        <option value="Secundaria">Secundaria</option>
                        <option value="Primaria">Primaria</option>
                        <option value="Kinder">Kinder</option>
                    </select>
                    <p className='spanA'>{errors.level?.message}</p>
                </form>
                <form action=""className='selectCole'>
                    <select className='selectCole__ida'>
                        <option value="-">---------------------------</option>
                        {ida.map((colegio) => (
                            <option key={colegio.Colegio} value={colegio.Colegio}>{colegio.Colegio}</option>
                        ))}
                    </select>
                    <span className='spanA'>{errors.school?.message}</span>
                </form>
            </div>

            <MapsRutas onMarkerClick={handleMarkerClick}></MapsRutas>

            <form className='indicePuntosRuta'>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
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