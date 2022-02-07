import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Auth.module.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    if(!email.includes('@') || password.trim().length < 6 || email.trim() === '') {
      console.log('INVALID');
      return;
    }
    dispatch(authActions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
