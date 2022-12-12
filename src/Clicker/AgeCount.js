import { useState } from "react";

const AgeCount = () => {
  const [age, setAge] = useState(22);

  const handleAgeUp = () => {
    setAge(age + 1);
  };

  const handleAgeDown = () => {
    setAge(age - 1);
  };

  return (
    <div>
      <h1>Use State Hook</h1>
      <h2>Age: {age}</h2>
      <button onClick={handleAgeUp}>Age up</button>
      <button onClick={handleAgeDown}>Age down</button>
    </div>
  );
};

export default AgeCount;
