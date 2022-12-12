import { useState } from "react";

function App() {
  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setEmail(e.target.value);
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
        value
      )
    ) {
      setError("Invalid Email");
    } else {
      setError("");
    }
  };

  return (
    <div className="container">
      <h3>Controlled vs Uncontrolled input</h3>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="text" name="name" value={email} onChange={handleInput} />
        <p style={{ color: "red" }}>{error && error}</p>
      </div>
    </div>
  );
}

export default App;

/*
 <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
*/
