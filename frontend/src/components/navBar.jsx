import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/home'
import Nosotros from '../pages/homep/acercaDeNosotros'
import Contacto from '../pages/homep/contactanos'
import Login from '../pages/Login'
import IPadre from '../pages/loginPadre/inicioPadre'
import FHijos from '../components/form/formularioHijo'
import CrearRutas from '../pages/loginAdministrador/crearRuta'
import CrearRutasIda from '../pages/loginAdministrador/crearRutasIda'
import ListaHijos from '../pages/loginPadre/listaHijos'
import LoginAdmind from '../pages/loginAdministrador/loginAdmind'
import InicioAdmind from '../pages/loginAdministrador/inicioAdmind';
function navBar() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/InicioPadre" element={<IPadre/>}/>
        <Route path="/ListaHijos" element={<ListaHijos/>}/>
        <Route path="/FormHijos" element={<FHijos/>}/>
        <Route path="/CrearRutas" element={<CrearRutas/>}/>
        <Route path="/CrearRutas/ida" element={<CrearRutasIda/>}/>
        <Route path="/LoginAdmind" element={<LoginAdmind/>}/>
        <Route path="/InicioAdmind" element={<InicioAdmind/>}/>
      </Routes>
  )
}
//<Route path="/Contacto" element={<Contacto/>}/>
export default navBar