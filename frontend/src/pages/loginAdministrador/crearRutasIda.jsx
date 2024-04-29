import React, { Fragment, useState } from 'react'
import styled from 'styled-components';
import HeaderAdmind from '../../components/loginAdmind/headerAdmind'
import MapsRutas from '../../components/maps/mapsRutas';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    level: yup.mixed('Seleccione un nivel').oneOf(['M', 'F'])
            .required('Seleccione un nivel')
  }).required()
function CrearRutasIda() {

    const [ida, setIda] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    
    function pedirNombreColegiosIda(){
        if(!errors.level){

            agregarAlSelectColegiosIda();
        }
    }
    function agregarAlSelectColegiosIda(colegios){
        {ida.map((componente, index) => (
            <option key={index} value={'nombreColegios'}>{componente}</option>
        ))}
    }
    const [markerCoordinates, setMarkerCoordinates] = React.useState(null);

    const handleMarkerClick = (lat, lng) => {
        setMarkerCoordinates({ lat, lng });
    };
  return (
    <Fragment>
        <HeaderAdmind></HeaderAdmind>
        <ContainerRutasIda>
            <div className='selectIzquierda'>
                <form className='selectNivel' onChange={pedirNombreColegiosIda}>
                    <select className='selectNivel__ida'
                    {...register("level")}>
                        <option value="S">---------------------------</option>
                        <option value="S">Secundaria</option>
                        <option value="P">Primaria</option>
                        <option value="K">Kinder</option>
                    </select>
                    <p className='spanA'>{errors.level?.message}</p>
                </form>
                <form action=""className='selectCole'>
                    <select className='selectCole__ida'>
                        <option value="-">---------------------------</option>
                        {ida}
                    </select>
                    <p className='spanA'>{errors.school?.message}</p>
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
`