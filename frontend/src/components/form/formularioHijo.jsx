import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import HPadre from '../loginPadre/headerPadre'

const schema = yup
  .object({
    firstName: yup.string('Solo esta permitido letras')
                .required('Se requiere Nombres'),
    lastName: yup.string('solo esta permitido letras')
            .required('Se requiere Apellidos'),
    num: yup.number('Solo numeros')
          .required('Se requiere Apellidos'),
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
        Swal.fire({
          icon: 'success',
          text: 'Se agrego correctamente',
          background:'#B4B7A2',
          confirmButtonColor:'#F57D0D',
        }).then(respuesta => {
          if (respuesta) {
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
        <label>Nombre:</label>
        <input
          className='inputT' 
          type="text" 
          maxLength={15}
          {...register("firstName")}
        />
        <p className='spanA'>{errors.firstName?.message}</p>
        <label >Apellido:</label>
        <input 
          className='inputT' 
          type="text" 
          maxLength={20}
          {...register("lastName")}
        />
        <p className='spanA'>{errors.lastName?.message}</p>  

        <label >Numero de Telefono:</label>
        <input
          className='inputT' 
          type="text"
          {...register("num")}/>
        <p className='spanA'>{errors.num?.message}</p>  
        <label >Sexo:</label>
        <select
          className="select-customizado"
          {...register("sex")}>
            <option >--------</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
        </select>
        <p className='spanA'>{errors.sex?.message}</p>
        <label>Nivel que Cursa el Estudiante:</label>
        <select 
          className="select-customizado"
          {...register("level")}>
            <option >--------</option>
            <option value="S">Secundaria</option>
            <option value="P">Primaria</option>
            <option value="K">Kinder</option>
        </select>
        <p className='spanA'>{errors.level?.message}</p>
        <button type='submit' id='button100'>Agregar Hijo</button>
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
  #formH{
    width: 25%;
    display: block;
  }
  label{
    color: #636363;
    font-family: 'ralewayB';
    display: block;
  }
  .spanA{
    font-family: 'nunitoN';
    color: red;
    margin: 0px;
    padding: 0px;
    font-size: calc(0.01vw + 0.8em);
  }
  .inputT{
    background-color: #f2f2f2;
    border:none;
    width: 100%;
    height: 5vh;
    border-radius: 0.7vh;
    font-family: 'nunitoN';
  } 
  /* Estilo del select */
.select-customizado {
  background-color: #f2f2f2;
  color: #333;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 0.7vh;
  font-family: 'nunitoN';
  font-size: calc(0.1vw + 0.8em);
  width: 100%;
  height: 6vh;
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
  border: #F57D0D;
  font-family: 'nunitoN';
  background-color: #f2f2f2;
  color: #333;
  padding: 8px;
}
  #button100{
    background-color: #F57D0D;
    color: white;
    font-family: 'ralewayB';
    margin-top: 2vh;
    border:none;
    width: 100%;
    height: 5vh;
    border-radius: 0.7vh;
  }
  .colorButton{
    background-color: #F57D0D;
  }
`


/*
customClass: {
  container: '...',
  popup: '...',
  header: '...',
  title: '...',
  closeButton: '...',
  icon: '...',
  image: '...',
  content: '...',
  input: '...',
  inputLabel: '...',
  validationMessage: '...',
  actions: '...',
  confirmButton: '...',
  denyButton: '...',
  cancelButton: '...',
  loader: '...',
  footer: '....'
}
Swal.fire({
  customClass: {
    confirmButton: 'swalBtnColor'
  },
  title: 'Comentario Agregado',
  icon: 'success'
});
.swal2-styled.swal2-confirm.swalBtnColor {
  color: #FFC900
}
*/