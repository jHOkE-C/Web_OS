import React from 'react';
import Form_login_cli from '../components/form_login_client'
import Header from '../components/header'
import HPadre from '../components/loginPadre/headerPadre'
function Login() {
  return (
    <div>
      <HPadre></HPadre>
      <Form_login_cli/>
    </div>
  );
}

export default Login;