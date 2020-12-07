import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      count: 0,
      buttonValues: []
    }
  }

  updateCount = (event) => {
      event.preventDefault();
      var increment = Number(event.target.value);
      this.setState({ count: this.state.count + increment });
  }

  handleSubmit = (event) => {
      event.preventDefault();
      var increment = Number(event.target.increment.value);
      this.setState({ buttonValues: [...this.state.buttonValues, increment] });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>custom counter</h1>
        </header>
        <div>{ this.state.count }</div>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="increment" />
          <button id="generate" type="submit">generate button</button>
          {this.state.buttonValues.map(value => {
              return <button id={`add-${value}`} type="button" onClick={this.updateCount} value={`${value}`}>Add {value}</button>
          })}
        </form>
      </div>
    );
  }
}

export default App;