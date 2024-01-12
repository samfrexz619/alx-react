import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className=''>
      <div>
        <p>Login to access the full dashboard</p>
        <label htmlFor="mail">Email</label> &nbsp; 
        <input type="email" name="mail" id="mail" />&nbsp;
        <label htmlFor="psswd">Password</label>&nbsp;
        <input type="password" name="psswd" id="psswd" />&nbsp;
        <button>
          OK
        </button>
      </div>
    </div>
  );
}

export default Login;
