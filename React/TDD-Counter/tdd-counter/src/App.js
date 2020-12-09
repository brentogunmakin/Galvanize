import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  

  render() {
    return (
      <div className="App">
        <h2 className="counter">Count: {this.state.number}</h2>
        <button className="plus-one" onClick={() => this.setState({ number: this.state.number + 1 })}>
          +1
        </button>
        <button className="minus-one" onClick={() => this.setState({ number: this.state.number - 1 })}>
          -1
        </button>
      </div>
    );
  }
}

export default App;
