import React from "react";
import st /* st - style */ from "./Login.module.css"
import LoginReduxForm from "./LoginForm.jsx";
import { connect } from 'react-redux';
import { login } from './../../../redux/authReducer';
import { Redirect } from 'react-router-dom';


const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return <div className={st.login}>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);