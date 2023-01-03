import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const apiRoute = process.env.API_ROUTE || "http://localhost:8080/which";

function App() {
  const [agency, setAgency] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    fetch(apiRoute)
      .then((response) => response.text())
      .then((data) => {
        setAgency(data);
        setLoading(false);
      });
  }, [loading, agency ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="question">
        <h1> Quelle est la meilleure agence ?</h1>
        <button onClick={() => setLoading(true)}>Dis-moi !</button>
      </div>
      { agency && (
        <div className="answer">   
          <h2> {agency} </h2>
        </div>  
        )
      }
    </div>
  );
}

export default App;
