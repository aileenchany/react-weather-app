import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <div className="row">
             {/* search section */}
                <form>
                    <div className="row" >
                        <div className="col-7">
                            <input type="search" placeholder="Type a city..." autoFocus="on" autoComplete="off" className="form-control" />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-outline-secondary search-button"><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="search-icon"
                    >
                      <path
                        d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
                      />
                      <linearGradient id="my-gold-gradient-1" x2="1" y2="1">
                        <stop offset="0%" stopColor="#d8ab50" />
                        <stop offset="65%" stopColor="#fbf5b7" />
                        <stop offset="100%" stopColor="#aa771c" />
                      </linearGradient>
                    </svg></button>                    
                            <button type="submit" className="btn btn-outline-secondary location-button"><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="location-icon"
                    >
                      <path
                        d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                      />
                      <linearGradient id="my-gold-gradient-2" x2="1" y2="1">
                        <stop offset="0%" stopColor="#d8ab50" />
                        <stop offset="65%" stopColor="#fbf5b7" />
                        <stop offset="100%" stopColor="#aa771c" />
                      </linearGradient>
                    </svg></button>
                        </div> 
                    </div> 
                </form>
          </div>
          {/* main weather section */}
          <div className="row">
            <div className="col-6">
              <p className="location">New York, US</p>
              <ul className="info">
                <li>Last updated: Sat, 5/15, 15:52 pm</li>
                <li>Clear sky</li>
              </ul>
            </div>
            <div className="col-6">
              <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" className="main-icon" /> <span className="temperature">73</span><span className="units"> <a href="/">°F</a> | <a href="/">°C</a></span> 
            </div>          
          </div>
          {/* weather conditions */}
          <div className="row weather-conditions">
            <div className="col-3">
              Feels like: 72°
            </div>
            <div className="col-3">
              H/L: 77° 68°
            </div>
            <div className="col-3">
              Humidity: 25%
            </div>
            <div className="col-3">
              Winds: 6 mph
            </div>
          </div>

        </div>
    )
}