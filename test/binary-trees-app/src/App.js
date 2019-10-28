import React, { Component } from "react";
import "./App.css";
import BinaryNodeTreeApp from "./components/BinaryNodeTreeApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="repos">
          <a
            href="https://github.com/boxgames1/hash-tables-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn btn-default mr10">
              Hash Tables
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/boxgames1/double-linked-list-app"
          >
            <button className="btn btn-default mr10">
              Double Linked Lists
            </button>
          </a>
          <a
            href="https://github.com/boxgames1/binary-trees-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-default mr10">
              Binary Trees
            </button>
          </a>
        </div>
        <header className="App-header">
          <h1 className="App-title">
            Binary Trees React App
          </h1>
        </header>
        <BinaryNodeTreeApp />
      </div>
    );
  }
}

export default App;
