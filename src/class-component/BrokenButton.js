import { Component } from "react";

class BrokenButton extends Component {
  // STATEFUL CLASS COMPONENT
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    // setting the context of handleClick
    // if we had five of these buttons each of them would have their own this
    // now javascript knows what we want to happen
    // there are different ways of doing this but we wont go over it
  }

  handleClick(e) {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default BrokenButton;

/*
If your component is stateless, you can omit the constructor function.
If you are building a component with state you need a standard React constructor.
constructor takes one argument - props
you must call super(props) at start of constructor which registers your class as a react component
inside the instance methods you can refer to this.state just like you did this.props

Every time we creat a component we are extending React so we get all of its functions

State most commonly changes in direct response to some event. In React, every JSX element has built-in
attributes representing every kind of browser event.
They are camel cased, like onClick, and take callback functions as event listeners

WHY DO WE NEED BIND?

- who is calling handleclick for us?
React! is, on click
- What is it calling it on?
It doesn't remember to call in our instance
the method we called is "out of context"
- so what do we need to do?
We need to bind it...

*/
