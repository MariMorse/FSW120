import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    numberOfDice: null,
    rolls: [],
    rollSum: null
  };
  diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Dice Box</h1>
      </div>
    );
  }
}
export default App;
