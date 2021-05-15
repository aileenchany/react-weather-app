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
          <Weather />
          <hr />
        </div>
      </div>
      <footer><a href="https://github.com/aileenchany/react-weather-app" target="_blank">Open-source</a> code by <a href="https://www.linkedin.com/in/aileen-chanmiranda/" target="_blank">ACM</a></footer>
    </div>
  );
}
