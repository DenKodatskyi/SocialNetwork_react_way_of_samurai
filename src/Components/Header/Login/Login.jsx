import React from "react";
import st /* st - style */ from "./Login.module.css"
import LoginReduxForm from "./LoginForm.jsx";


const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return <div className={st.login}>
    <h1>Login</h1>

    <LoginReduxForm onSubmit={onSubmit} />

  </div>
}


export default Login;