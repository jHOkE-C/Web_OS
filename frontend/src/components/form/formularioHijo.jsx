import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2'
import HPadre from '../loginPadre/headerPadre'

import MapsF from '../maps/mapsForm'; 

const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}
const schema = yup.object({
  firstName: yup.string('Solo esta permitido letras')
            .required('Se requiere Nombres'),
  lastName: yup.string('solo esta permitido letras')
          .required('Se requiere Apellidos'),
  sex: yup.mixed().oneOf(['M', 'F']),
  /*foto: yup.mixed()
        .required("Requerido")
        .test("Tipo de archivo valido", "No es un tipo de imagen valido", value => isValidFileType(value && value.name.toLowerCase(), "image"))
        .test("Tipo de archivo valido", "Maximo tamaño 100KB", value => value && value.size <= MAX_FILE_SIZE),
  school: yup.string()*/
}).required()

function FormularioHijo() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if(!errors.firstName && !errors.lastName && !errors.sex){
      try {
        const response = await fetch('http://localhost:5000/formularioHijo', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: data.firstName,
            apellido: data.lastName,
            sexo: data.sex
          }),
          // body: JSON.stringify(data), // Enviar los datos del formulario como JSON
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
  };

  async function requestDataColegio(){
    /*const response = await fetch('http://localhost:5000/formularioHijo', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nivel: 'k'
        }),
      });
    const dataResponse = await response.json();*/
  }
  const [markerCoordinates, setMarkerCoordinates] = React.useState(null);

  const handleMarkerClick = (lat, lng) => {
    setMarkerCoordinates({ lat, lng });
  };
  return (
    <Fragment>
      <HPadre/>
      <FormContainerH>
        
        <form onSubmit={handleSubmit(onSubmit)} id='formH'>
          <h1>FORMULARIO PARA HIJO</h1>
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
            onChange={requestDataColegio()}
            {...register("level")}>
              <option >--------</option>
              <option value="Secundaria">Secundaria</option>
              <option value="Primaria">Primaria</option>
              <option value="Kinder">Kinder</option>
          </select>
          <p className='spanA'>{errors.level?.message}</p>
          <label htmlFor="">Colegio :</label>
          <select 
            className="select-customizado"
            {...register("school")}>
              <option >--------</option>
          </select>
          <p className='spanA'>{errors.school?.message}</p>
          <MapsF onMarkerClick={handleMarkerClick}/>
          <input 
            type="text" 
            value={markerCoordinates != null ? markerCoordinates.lat : null} 
          />
          <input 
            type="text" 
            value={markerCoordinates != null ? markerCoordinates.lng : null} 
          />
          <button type='submit' id='button100'>Agregar Hijo</button>
        </form>
        
      </FormContainerH>
    </Fragment>
    
  )
}

export default FormularioHijo

const FormContainerH = styled.nav`
  margin-top: 10vh;
  margin-bottom: 5vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;  
  H1{
    display: flex;
    justify-content: center;
    font-family: 'ralewayB';
    color: #F57D0D;
  }
  #formH{
    width: 70%;
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
    width: 50%;
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
    width: 50%;
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
  #button100:hover{
    background-color: #636363;
    color: #F57D0D;
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