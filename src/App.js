import React, { Component } from "react";
import "./App.css";
import APODtest from "./APODtest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Nasa APOD API test</p>

          <APODtest />
        </header>
      </div>
    );
  }
}

export default App;
