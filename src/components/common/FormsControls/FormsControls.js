import React from "react";
import styles from "./FormsControls.module.css";
import cn from "classnames";
import { Field } from "redux-form";

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;

  return (
    <div className={cn(styles.formControl, { [styles.error]: hasError })}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validator,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validator={validator}
      {...props}
    />
    {text}
  </div>
);
