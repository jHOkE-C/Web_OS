import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
const schema = yup
    .object({
      email1: yup.string().email('Debe ser un Email valido')
              .required('Se requiere Email'),
      password1: yup.string()
              .required('Se requiere Passworrd'),
    })
    .required()  
function LoginAdministrador() {
    let navigate = useNavigate();
  const {register,handleSubmit,formState: { errors },} = useForm({resolver: yupResolver(schema),})
       

  const onSubmit = async (data) => {
    if (!errors.firstName && !errors.lastName && !errors.num) {
        console.log(data);
      
        fetch('http://localhost:5000/auth_login_admin', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre_usuario: data.email1,
            contrasena: data.password1,
          }),
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(dataResponse => {
                if (dataResponse.mensaje === 'Inicio de sesión exitoso') {
                    Swal.fire({
                    icon: 'success',
                    text: 'Inicio Exitoso',
                    background: '#B4B7A2',
                    confirmButtonColor: '#F57D0D',
                    }).then(respuesta => {
                    if (respuesta) {
                        navigate('/InicioAdmind', { replace: true });
                    }
                    });
                } else if (dataResponse.mensaje === 'Nombre de usuario o contraseña incorrectos') {
                    Swal.fire({
                    icon: 'error',
                    text: 'Nombre de usuario o contraseña incorrectos',
                    background: '#B4B7A2',
                    confirmButtonColor: '#F57D0D',
                    });
                }
            })
        .catch(error => {
          console.error('Error during fetch operation:', error);
          Swal.fire({
            icon: 'error',
            text: 'Ocurrió un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.',
            background: '#B4B7A2',
            confirmButtonColor: '#F57D0D',
          });
        });
      }
      
  }    
  return (
    <Fragment>
        <Login_container_client>
        <div id='cuadro_login'>
            <div id='login_title'>
                <h1 className='title_especial'>L</h1>
                <h1 class="titleMain">O</h1>
                <h1 class="titleMain">G</h1>
                <h1 class="titleMain">I</h1>
                <h1 class="titleMain">N</h1>
            </div>
            <form action="" id='form_login_c' onSubmit={handleSubmit(onSubmit)}>
                <label>Email: </label>
                <input type="email" 
                placeholder='ejemplo@gmail.com' 
                className='input_l'
                {... register('email1')}
                />
                <p className='spanA'>{errors.email1?.message}</p>
                <label>Password:  </label>
                <input type="password"   
                className='input_l' 
                {... register('password1')}
                />
                <p className='spanA'>{errors.password1?.message}</p>
                <Link to='www.google.com'>Olvidaste tu Contraseña?</Link>
                <br />
                <button type='submit' id='button100'>Iniciar Sesion</button>
            </form>
        </div>
    </Login_container_client>
    </Fragment>
  )
}

export default LoginAdministrador

const Login_container_client = styled.nav`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    label{
      font-family: 'nunitoN'; 
    }
    .buttonImg{
        height: 30px;
        width: 30px;
    }
    a{
      font-family: 'nunitoN ';
      text-decoration: none;
      color: #636363;
    }
    a:hover{
        color: #F57D0D;
    }
    .spanA{
    font-family: 'nunitoN';
    color: red;
    margin: 0px;
    padding: 0px;
    font-size: calc(0.01vw + 0.8em);
    }
    .input_l{
        font-family: 'nunitoN';
        background-color: white;
        border: none;
        border-radius: 5px;
        width: 100%;
        height: 30px;
        margin-bottom: 10%;
    }
    #cuadro_login{
        margin-top: 15vh;
        background-color: #C7CAB6;
        padding: 4em;
        width: 20%;
        height: 70%;
        min-width: 250px;
        min-height: 350px;
        display: block;
        border-radius: 40px;
        align-items: center;
        align-content: center;
        justify-content: center;
        border: 1px solid #636363;
    }
    #login_title{
        display: inline;
        height: auto;
        width: 100%;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }
    h1.titleMain{
      font-family: 'ralewayB';
      display: inline;
      color: #F57D0D;
      padding-left: 25px;
      padding-bottom: 0px;
      font-size: calc(1.2vw + 1em);
    }
    h1.title_especial{
        font-family: 'ralewayB';
      display: inline;
      color: #F57D0D;
      padding-bottom: 0px;
      font-size: calc(1.2vw + 1em);
    }
    #form_login_c{
        display: block;
        padding-top: 40px;
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

`