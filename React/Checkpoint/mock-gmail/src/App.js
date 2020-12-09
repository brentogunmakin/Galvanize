import React, { Component } from 'react'
import './App.css';
import Banner from './Components/Banner';
import EmailView from './Components/EmailView';

class App extends Component {
  constructor(){
    super();
    this.state = {
      emails: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/emails')
      .then(response => response.json())
      .then(data => {
        this.setState({emails: data})
      })
  }

  render(){
    return(
      <div>
          <Banner />
          <EmailView props={this.state.emails}/>


      </div>
    )
    }
}

export default App;
