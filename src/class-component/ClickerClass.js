import { Component } from "react";

class ClickerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
    this.getRandom = this.getRandom.bind(this);
  }

  getRandom() {
    let rand = Math.floor(Math.random() * 10) + 1;
    // generate random number

    this.setState({ num: rand });
    // update state to random number
  }

  render() {
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 && <h2>YOU WIN</h2>}
        {this.state.num !== 7 && (
          <button onClick={this.getRandom}>Random Number</button>
        )}
      </div>
    );
  }
  // If num is equal to 7 we show the h2 and hide the button
  // if num is not 7 we show the button and hide h2
}

export default ClickerClass;
