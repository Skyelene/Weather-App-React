import React from "react";
import Weather from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/Skyelene"
            target="_blank"
            rel="noreferrer"
          >
            Rachel Buday,
          </a>{" "}
          Open-sourced on{" "}
          <a
            href="https://github.com/Skyelene/Weather-App-React"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://wetter-app-mit-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
