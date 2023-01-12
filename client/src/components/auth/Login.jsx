import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChangeInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    console.log('Success');
  };

  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={(event) => onSubmitForm(event)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(event) => onChangeInput(event)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={(event) => onChangeInput(event)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </section>
  );
};
