import React from "react";
import st /* st - style */ from "./Login.module.css"
import { Field, reduxForm } from "redux-form"
import { Input } from "../../assets/FormsControls/FormsControls";
import { required } from './../../../utils/validators/validators';

const LoginForm = (props) => {
  return <div className={st.login}>

      <form onSubmit={props.handleSubmit}>
        <h1>Login</h1>
        <div>
          <Field component={Input} className={st.inputText} placeholder={"Login"} name={"email"} validate={[required]} />
        </div>
        <div>
          <Field component={Input} className={st.inputPassword} placeholder={"Password"} name={"password"} type={"password"} validate={[required]} />
        </div>
        <div>
          <Field component={Input} type={"checkbox"} name={"rememberMe"} validate={[required]} /> remember me
      </div>
      {props.error && <div className={st.form_sumError}>{props.error}</div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    
  </div>
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

export default LoginReduxForm;