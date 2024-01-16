import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Login = () => {
  return (
    <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
      <div className={css(styles.medium)}>
        <div className={css(styles.label)}>
          <label htmlFor="mail">Email:</label>
          <input type="email" name="mail" id="mail" />
        </div>
        <div className={css(styles.label)}>
          <label htmlFor="psswd">Password:</label>
          <input type="password" name="psswd" id="psswd" />
        </div>
        <button className={css(styles.btn)}>
          OK
        </button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    padding: '20px 0',
    width: '100%'
  },
  medium: {
    '@media (min-width: 900px)': {
      display: 'flex',
      width: '100%'
    }
  },
  label: {
    width: '100%',
    display: 'flex',
    columnGap: '10px',
    margin: '10px 5px',
    '@media (min-width: 900px)': {
      width: 'auto',
      margin: '0 5px'
    }
  },
  btn: {
    cursor: 'pointer',
    marginLeft: '7px',
    '@media (min-width: 900px)': {
      marginLeft: 0,
    }
  }
})

export default Login;
