import React, { Component } from "react";
import axios from "axios";
import "./style/app.css";
class App extends Component {
  state = { advice: "" };
  componentDidMount() {
    this.fetchApi();
  }
  fetchApi = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        let { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    let { advice } = this.state;
    return (
      <div className="app">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={this.fetchApi}>
          <span>Click Me</span>
        </button>
      </div>
    );
  }
}

export default App;
