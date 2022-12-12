import { useState } from "react";

const ClickerHooks = ({ rand }) => {
  const [num, setNum] = useState(1);
  // useState is a function so we need to init a value
  // this will return an array, and the array has 2 valuse
  // one is a getter and one is a setter

  const getRandom = () => {
    rand = Math.floor(Math.random() * 10) + 1;
    // generate random number

    setNum(rand);
    // update state with the new value
    // and we dont have to use this now! It becomes much easier
    // useState sets the initial value and then gives us two variables by
    // destructuring. num gives us the value and setNum will give us the
    // possibility to update the value.
  };

  // We can use javascript in jsx, so we can actually get the value from state by using num
  // and this value is now dynamic
  // we can also use expressions with jsx
  // so we can have a ternary operator here to check if num is equal to 7 or not
  // we dont need a function for that we can just simply code it right in the jsx
  return (
    <div>
      <h1>Number is: {num}</h1>
      {num === 7 ? (
        <h2>YOU WIN!</h2>
      ) : (
        <button onClick={getRandom}>Random Number</button>
      )}
    </div>
  );
};

export default ClickerHooks;
