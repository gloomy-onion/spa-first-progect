import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../state/auth-reducer";
import { Navigate } from "react-router";

const LoginForm = (props) => {
  return (
    <>
      <h1>Login </h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Email"} name={"email"} component={Input} />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            name={"password"}
            component={Input}
            type={"password"}
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
    props.login(formData.email, formData.password, formData.rememberMe);

    if (props.isAuth) {
      return <Navigate to={"/profile"} />;
    }

    return (
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  isAuth: state.auth.isAuth
}

export default connect(mapStateToProps, { login })(Login);
