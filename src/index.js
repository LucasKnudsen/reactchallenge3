import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    name: '',
    age: null
  }

  render() {
    const { name, age } = this.state

    return (
      <div className="App">
        <div>
          <h2 className="subtitle is-4">Update Data from an input</h2>
        </div>

        {/* Display Data */}
        <div className="input-display">
          <p>Display Name: {name}</p>
          <p>Display Age: {age} </p>
        </div>

        {/* Collect User Inputs */}
        <div className="inputs">
          {/* Input name */}
          <div className="field">
            <label className="label">Name: </label>
            <input
              className="input"
              type="text"
              placeholder="William"
              onChange={(event) => {this.setState({name: event.target.value})}}
            />
          </div>

          {/* Input age */}
          <div className="field">
            <label className="label">Age: </label>
            <input
              className="input"
              type="number"
              placeholder="38"
              onChange={(event) => this.setState({age: event.target.value})}
            />
          </div>
        </div>

      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
