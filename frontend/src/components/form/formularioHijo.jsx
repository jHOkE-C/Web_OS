import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert'
import HPadre from '../loginPadre/headerPadre'
const schema = yup
  .object({
    firstName: yup.string('Solo esta permitido letras')
                .required('Se requiere Nombres'),
    lastName: yup.string('solo esta permitido letras')
            .required('Se requiere Apellidos'),
    num: yup.number('Solo numeros')
          .required('Se requiere Apellidos')
  })
  .required()
function FormularioHijo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    if (!errors.firstName && !errors.lastName  && !errors.num) {
        Swal({
          icon: 'success',
          text: 'Se creó el Curso correctamente',
          buttons: ["ok", "ok uwu"]
        }).then(respuesta => {
          if (respuesta) {
            window.location.reload();
          } else {
            window.location.reload();
          }
        });
    }  
    console.log(data)

  }
  return (
    <Fragment>
    <HPadre/>
    <FormContainerH>
      
      <form onSubmit={handleSubmit(onSubmit)} id='formH'>
        <h1></h1>
        <label>Nombre</label>
        <input
          className='inputT' 
          type="text" 
          maxLength={15}
          {...register("firstName")}
        />

        <label >Apellido</label>
        <input 
          className='inputT' 
          type="text" 
          maxLength={20}
          {...register("lastName")}
        />
          

        <label >Numero de Telefono</label>
        <input
          className='inputT' 
          type="text"
          {...register("num")}/>
          
        <label >Sexo</label>
        <select 
          id="language">
            <option value="en">Masculino</option>
            <option value="es">Femenino</option>
        </select>

        <label>Nivel que Cursa el Estudiante</label>
        <select id="language">
            <option value="en">Secundaria</option>
            <option value="es">Primaria</option>
            <option value="es">Kinder</option>
        </select>
        <label  >DEPENDIENDO DE QUE NIVEL PONGA SALDRAN LOS COLEGIOS</label>
        <select id="language">
        </select>
        <button type='submit'>Agregar Hijo</button>
      </form>
    </FormContainerH>
    </Fragment>
  )
}

export default FormularioHijo

const FormContainerH = styled.nav`
  height: calc(88vh);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: aliceblue;
  #formH{
    width: 25%;
    display: block;
    background-color: red  ;
  }
  label{
    display: block;
  }
  .inputT{
    
  }
`