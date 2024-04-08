import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/home'
import Nosotros from '../pages/nosotros'
import Contacto from '../pages/contacto'
import Login from '../pages/Login'
function navBar() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
  )
}

export default navBar