import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmed: '',
  });

  const { name, email, password, passwordConfirmed } = formData;

  const onChangeInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    if (password !== passwordConfirmed) {
      console.log('Passwords do not match');
    } else {
      console.log('Success');
    }
  };

  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(event) => onSubmitForm(event)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(event) => onChangeInput(event)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(event) => onChangeInput(event)}
            required
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
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
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='passwordConfirmed'
            minLength='6'
            value={passwordConfirmed}
            onChange={(event) => onChangeInput(event)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </section>
  );
};
