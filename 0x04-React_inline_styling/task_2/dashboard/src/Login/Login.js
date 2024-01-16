import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Login = () => {
  return (
    <div className=''>
      <div>
        <p>Login to access the full dashboard</p>
        <label htmlFor="mail" className={css(styles.ml)}>Email</label> &nbsp; 
        <input type="email" name="mail" id="mail" />&nbsp;
        <label className={css(styles.ml)} htmlFor="psswd">Password</label>&nbsp;
        <input className={css(styles.ml)} type="password" name="psswd" id="psswd" />&nbsp;
        <button>
          OK
        </button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  ml: {
    marginLeft: '8px'
  }
})

export default Login;
