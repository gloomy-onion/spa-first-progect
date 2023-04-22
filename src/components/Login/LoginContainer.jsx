import React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../state/auth-reducer";
import { Navigate } from "react-router";
import style from "./../common/FormsControls/FormsControls.module.css";
import Button from "../common/Button/Button";
import { required } from "../../helpers/validators/validators";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <>
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        {createField("Email", "email", [required], Input)}
        {createField("Password", "password", [required], Input, {
          type: "password",
        })}
        {createField(
          null,
          "rememberMe",
          [required],
          Input,
          { type: "checkbox" },
          "remember me"
        )}

        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
          <Button text={"Login"} />
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onFormSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <LoginReduxForm onSubmit={onFormSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
