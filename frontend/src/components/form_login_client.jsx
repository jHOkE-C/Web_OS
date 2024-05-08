import { Fragment } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Google from "../img/google.jpg";
import Facebook from "../img/facebook.png";
import Swal from "sweetalert2";
const schema = yup
  .object({
    email1: yup
      .string()
      .email("Debe ser un Email valido")
      .required("Se requiere Email"),
    password1: yup.string().required("Se requiere Passworrd"),
  })
  .required();
function Form_login_client() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    if (!errors.firstName && !errors.lastName && !errors.num) {
      const response = await fetch("http://localhost:5000/auth_login_padre", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: data.email1,
          contrasena: data.password1,
        }),
      });

      const dataResponse = await response.json();

      if (dataResponse.mensaje === "Inicio de sesion exitoso") {
        Swal.fire({
          icon: "success",
          text: "Inicio Exitoso",
          background: "#B4B7A2",
          confirmButtonColor: "#F57D0D",
        }).then((respuesta) => {
          if (respuesta) {
            navigate("/inicioPadre", { replace: true });
          }
        });
      } else if (
        dataResponse.mensaje === "Nombre de usuario o contraseña incorrectos"
      ) {
        Swal.fire({
          icon: "error",
          text: "Nombre de usuario o contraseña incorrectos",
          background: "#B4B7A2",
          confirmButtonColor: "#F57D0D",
        });
      }
      console.log(data);
    }
  };

  return (
    <Login_container_client>
      <div id="cuadro_login">
        <div id="login_title">
          <h1 className="title_especial">L</h1>
          <h1 class="titleMain">O</h1>
          <h1 class="titleMain">G</h1>
          <h1 class="titleMain">I</h1>
          <h1 class="titleMain">N</h1>
        </div>
        <form action="" id="form_login_c" onSubmit={handleSubmit(onSubmit)}>
          <label>Email: </label>
          <input
            type="email"
            placeholder="ejemplo@gmail.com"
            className="input_l"
            {...register("email1")}
          />
          <p className="spanA">{errors.email1?.message}</p>
          <label>Password: </label>
          <input
            type="password"
            className="input_l"
            {...register("password1")}
          />
          <p className="spanA">{errors.password1?.message}</p>
          <Link to="www.google.com">Olvidaste tu Contraseña?</Link>
          <br />
          <button type="submit" id="button100">
            Iniciar Sesion
          </button>
          <div id="buttonRedes">
            <button type="button" className="buttonI">
              <img src={Google} alt="" className="buttonImg" />
            </button>
            <button type="button" className="buttonI">
              <img src={Facebook} alt="" className="buttonImg" />
            </button>
          </div>
        </form>
      </div>
    </Login_container_client>
  );
}

export default Form_login_client;

const Login_container_client = styled.nav`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    font-family: "nunitoN";
  }
  .buttonI {
    background-color: white;
    border: none;
    width: 40%;
    border-radius: 20px;
  }
  .buttonI:hover {
    background-color: #636363;
  }
  .buttonI:active {
    background-color: #f57d0d;
  }
  #buttonRedes {
    display: flex;
    justify-content: space-between;
    margin-top: 20%;
  }
  .buttonImg {
    height: 30px;
    width: 30px;
  }
  a {
    font-family: "nunitoN ";
    text-decoration: none;
    color: #636363;
  }
  a:hover {
    color: #f57d0d;
  }
  .spanA {
    font-family: "nunitoN";
    color: red;
    margin: 0px;
    padding: 0px;
    font-size: calc(0.01vw + 0.8em);
  }
  .input_l {
    font-family: "nunitoN";
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    margin-bottom: 10%;
  }
  #cuadro_login {
    background-color: #c7cab6;
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
  #login_title {
    display: inline;
    height: auto;
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  h1.titleMain {
    font-family: "ralewayB";
    display: inline;
    color: #f57d0d;
    padding-left: 25px;
    padding-bottom: 0px;
    font-size: calc(1.2vw + 1em);
  }
  h1.title_especial {
    font-family: "ralewayB";
    display: inline;
    color: #f57d0d;
    padding-bottom: 0px;
    font-size: calc(1.2vw + 1em);
  }
  #form_login_c {
    display: block;
    padding-top: 40px;
  }
  #button100 {
    background-color: #f57d0d;
    color: white;
    font-family: "ralewayB";
    margin-top: 2vh;
    border: none;
    width: 100%;
    height: 5vh;
    border-radius: 0.7vh;
  }
  #button100:hover {
    background-color: #636363;
    color: #f57d0d;
  }
`;
