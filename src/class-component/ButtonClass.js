import { Component } from "react";

class ButtonClass extends Component {
  // STATELESS CLASS COMPONENT
  render() {
    return (
      <button
        onClick={function () {
          alert("Clicked");
        }}
      >
        Click me!
      </button>
    );
  }
}

export default ButtonClass;
