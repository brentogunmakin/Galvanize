import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <label>
          First Name:
          <input type="text" />
        </label>
        <label>
          Last Name:
          <input type="text" />
        </label>
        <button>REGISTER</button>
      </div>
    );
  }
}

export default Form;
