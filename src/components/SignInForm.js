import React from 'react';
import { Field, reduxForm } from 'redux-form';
import MdFitnessCenter from 'react-icons/lib/md/fitness-center';
import './SignInForm.css';

const SignInForm = ({ handleSubmit }) => {
  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <label className="signin-label">
        <span>Логин:</span>
        <Field
          name="username"
          component="input"
          type="text"
          className="signin-input"
        />
      </label>
      <label className="signin-label">
        <span>Пароль:</span>
        <Field
          name="password"
          component="input"
          type="password"
          className="signin-input"
        />
      </label>
      <button
        type="submit"
        className="waves-effect waves-light purple lighten-1 btn submit-button"
      >
        Войти <MdFitnessCenter className="submit-button_icon" />
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'signIn'
})(SignInForm);
