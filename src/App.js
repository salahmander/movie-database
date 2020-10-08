import React, { Component } from "react";

import AppBar from "./components/UI/appBar/AppBar";
import Background from "./components/UI/background/Background";
import Router from "./router/Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <AppBar />
        <Router />
      </div>
    );
  }
}

export default App;
