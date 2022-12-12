import { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Name: " + inputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" ref={inputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledComponent;
