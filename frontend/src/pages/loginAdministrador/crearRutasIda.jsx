import React, { Fragment, useState } from 'react'
import styled from 'styled-components';
import HeaderAdmind from '../../components/loginAdmind/headerAdmind'
import MapsRutas from '../../components/maps/mapsRutas';

function CrearRutasIda() {
    const [ida, setIda] = useState([]);
    function pedirNombreColegiosIda(){
    }
    function agregarAlSelectColegiosIda(){

    }
  return (
    <Fragment>
        <HeaderAdmind></HeaderAdmind>
        <ContainerRutasIda>
            <div className='selectIzquierda'>
                <form action=""className='selectNivel'>
                    <select className='selectNivel__ida'>
                        <option value="">Secundaria</option>
                        <option value="">Primaria</option>
                        <option value="">Kinder</option>
                    </select>
                </form>
                <form action=""className='selectCole'>
                    <select className='selectCole__ida'>

                    </select>
                </form>
            </div>

            <MapsRutas></MapsRutas>

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