import React, {useState} from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import Google from '../img/google.jpg'
import Facebook from '../img/facebook.png'
function Form_login_client() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    let navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: email,
          contrasena: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      setMessage(data.mensaje);
      if(data.mensaje === 'Inicio de sesion exitoso'){
        console.log("exicto");
        navigate('/inicioPadre', { replace: true }) 
        // Aquí ponemos replace:true para reemplazar la ruta actual con la tuya, pues si usaramos el navigate por sí solo, pushearía la ruta por encima de la otra
      }
    };
    



  return (
    <Login_container_client>
        <div id='cuadro_login'>
            <div id='login_title'>
                <h1 className='title_especial'>L</h1>
                <h1 class="titleMain">O</h1>
                <h1 class="titleMain">G</h1>
                <h1 class="titleMain">I</h1>
                <h1 class="titleMain">N</h1>
            </div>
            <form action="" id='form_login_c' onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" placeholder='Email' className='input_l' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password</label>
                <input type="password" placeholder='Passworrd' className='input_l' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <Link to='www.google.com'>olvidaste tu Contraseña?</Link>
                <br />
                <button type='submit' className='buttonN'>Iniciar Sesion</button>
                <div id='buttonRedes'>
                    <button type='button' className='buttonI'><img src={Google} alt="" className='buttonImg'/></button>
                    <button type='button' className='buttonI'><img src={Facebook} alt="" className='buttonImg'/></button>
                </div>
            </form>
        </div>
    </Login_container_client>
  )
}

export default Form_login_client

const Login_container_client = styled.nav`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .buttonI{
        background-color: white;
        border: none;
        width: 40%;
        border-radius: 20px;
    }
    .buttonI:hover{
        background-color: #636363;
    }
    .buttonI:active{
        background-color: #F57D0D;
    }
    #buttonRedes{
        display: flex;
        justify-content: space-between;
        margin-top: 20%;
    }
    .buttonImg{
        height: 30px;
        width: 30px;
    }
    a{
        text-decoration: none;
        color: #636363;
    }
    a:hover{
        color: #F57D0D;
    }
    .input_l{
        background-color: white;
        border: none;
        border-radius: 5px;
        width: 100%;
        height: 30px;
        margin-bottom: 10%;
    }
    #cuadro_login{
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
    .buttonN{
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 2%;
      padding-bottom: 2%;
      height: auto;/*(para que tenga fijo el height)*/
      width: 100%;
      background-color: #F57D0D;
      color: white;
      font-family: 'raleway';
      border-radius: 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      -o-border-radius: 5px;
      border: none;
  }
  .buttonN:hover{
      background-color:#636363;
      color: #F57D0D;
      transition-duration: 200ms;
  }
  .buttonN:active{
      border: #F57D0D 5px;
  }

`
