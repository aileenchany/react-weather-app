import React from "react";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="App">
          <h1>Weather App</h1>
          <Weather defaultCity="New York" />
        </div>
      </div>
      <footer><a href="https://github.com/aileenchany/react-weather-app" target="_blank" rel="noreferrer">Open-source</a> code by <a href="https://www.linkedin.com/in/aileen-chanmiranda/" target="_blank" rel="noreferrer">ACM</a> and hosted on <a href="https://vigorous-banach-36c0b8.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.</footer>
    </div>
  );
}
