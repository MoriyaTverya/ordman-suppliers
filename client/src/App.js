//import Login from "./components/Login";
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
            <Login/>
        </div>
      </div>
    </div>
  )
}


export default App;
