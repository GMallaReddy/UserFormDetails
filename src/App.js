import React, { Component } from "react";
import "./App.css";
import UserForm from "./MultiFormComponents/UserForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;
