import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
// import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" width={300} />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
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
      <div className="App-footer">
        <p><i>Copyright 2024</i></p>
      </div>
    </div>
  );
};

export default App;
