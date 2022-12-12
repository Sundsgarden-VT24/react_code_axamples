import NameTag from "./component/NameTag";

import "./App.css";

const hoc = (BaseComponent) => (props) => {
  // this function takes an argument => basecomponent with some props

  const addColor = {
    style: {
      color: "magenta",
    },
  };
  // add style

  const newProps = {
    ...props,
    ...addColor,
    // ... spread operator
    // sets the new props. ...props is spread operator which takes the old props
    // and then the new props.
    // spread can be used when you want the old value plus the new value
  };

  return <BaseComponent {...newProps} />;
  // returns the basecomponent with the new props (style)
};

const ColoredNameTag = hoc(NameTag);

function App() {
  return (
    <div className="container">
      <ColoredNameTag firstName="Helena" lastName="Johansson" />
      <NameTag firstName="Tore" lastName="Toresson" />
      <NameTag firstName="Doris" lastName="Dorisson" />
    </div>
    // in order to see the change we need to do some stuff
    // the colored name tag has an extra prop called style
    // we need to add that prop in our nametag component
  );
}

export default App;

/*
HIGHER ORDER COMPONENT

There is something called higher order function in javascript
It takes a function as an argument and returns another function
Higher order component is kind of the same. You have a component that takes
a component as an argument and returns a component.
The job of this HOC is to transform. Mostly you do something with the props

Lets say we want one of these nametags to be another color.
We could of course just put some style on that component... but we are
going to create a HOC to make an example. 
We are going to pass this component into the function wich will transform its prop
and add additional style to it to change color.
*/
