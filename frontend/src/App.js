import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateUser from './component/CreateUser';
import Login from './component/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"

          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/CreateUser" component={CreateUser} />
      </div>
    </Router>
    </div>
  );
}

export default App;
