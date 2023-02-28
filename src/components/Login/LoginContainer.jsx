import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <>
      <h1>Login </h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} name={"login"} component={"input"} />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            name={"password"}
            component={"input"}
          />
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
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
  const onSubmit = (formData) => {};
  return (
    <>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
export default Login;
