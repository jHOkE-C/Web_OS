import React from 'react'
import HPadre from '../loginPadre/headerPadre'
function formularioHijo() {
  return (
    <div>
      <HPadre></HPadre>
      <form action="">
        <label htmlFor="">Nombre</label>
        <input type="text" required/>
        <label htmlFor="">Apellido</label>
        <input type="text" required/>
        <label htmlFor="">Numero de Telefono</label>
        <input type="text" />
        <label htmlFor="">Sexo</label>
        <select id="language">
            <option value="en">Masculino</option>
            <option value="es">Femenino</option>
        </select>
        <label htmlFor="">Nivel que Cursa el Estudiante</label>
        <select id="language">
            <option value="en">Secundaria</option>
            <option value="es">Primaria</option>
            <option value="es">Kinder</option>
        </select>
        <label htmlFor="">DEPENDIENDO DE QUE NIVEL PONGA SALDRAN LOS COLEGIOS</label>
        <select id="language">
        </select>
      </form>
    </div>
  )
}

export default formularioHijo