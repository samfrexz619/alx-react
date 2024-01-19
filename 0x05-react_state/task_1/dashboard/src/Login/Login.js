import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';


const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [enableSubmit, setEnableSubmit] = useState(false)

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    try {
      setIsLoggedIn(true)
      const data = {
        email,
        password
      }
      console.log(data);
    } catch(err){
      console.log(err)
    } finally {
      // clear input after submitting
      setEnableSubmit(false)
      setEmail('')
      setPassword('')
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(()=> {
    if(email !== '' && password !== ''){
      setEnableSubmit(true)
    } else {
      if(!enableSubmit){
        setEnableSubmit(false)
      }
    }
  },[email, password])

  return (
    <form onSubmit={handleLoginSubmit} className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
      <div className={css(styles.medium)}>
        <div className={css(styles.label)}>
          <label htmlFor="mail">Email:</label>
          <input 
            type="email" 
            name="mail" 
            id="mail" 
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className={css(styles.label)}>
          <label htmlFor="psswd">Password:</label>
          <input 
            type="password" 
            name="psswd" 
            id="psswd" 
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <input 
          type="submit" 
          disabled={!enableSubmit} 
          value={'OK'} 
          className={css(styles.btn, !enableSubmit && styles.disabledBtn)} 
        />
      </div>
    </form>
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
  disabledBtn: {
    cursor: 'not-allowed'
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
