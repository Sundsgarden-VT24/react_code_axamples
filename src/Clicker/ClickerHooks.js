import { useState } from "react";

const ClickerHooks = ({ rand }) => {
  const [num, setNum] = useState(1);
  // useState is a function so we need to init a value
  // this will return an array, and the array has 2 values

  const getRandom = () => {
    rand = Math.floor(Math.random() * 10) + 1;
    // generate random number

    setNum(rand);
    // update state with the new value
  };
  
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
