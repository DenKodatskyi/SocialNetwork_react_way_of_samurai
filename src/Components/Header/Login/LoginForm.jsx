import React from "react";
import st /* st - style */ from "./Login.module.css"
import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
  return <div className={st.login}>

    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>

  </div>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

export default LoginReduxForm;