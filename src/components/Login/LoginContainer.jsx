import React from "react";
import { Field, reduxForm } from "redux-form";
import {Input} from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
  return (
    <>
      <h1>Login </h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} name={"login"}  component={Input} />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            name={"password"}
            component={Input}
          />
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={Input} />
          remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)};
  return (
    <>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
export default Login;
