import logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <div>
          <p>Login to access the full dashboard</p>
        </div>
      </div>
      <footer>
        <div className="App-footer">
          <p><i>Copyright 2020 - holberton School</i></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
