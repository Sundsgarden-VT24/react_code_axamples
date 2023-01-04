import { useState } from "react";
import { GiThreeFriends } from "react-icons/gi";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import "./multiple.css";

const Form = () => {
  // state to save our friend
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    label: "",
  });

  // array to save our list of friends
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setPerson({ ...person, [name]: value });
    // dynamic value, which it is in our state gets the name of the object
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.firstName && person.email && person.label) {
      const newPerson = { ...person, id: uuidv4() };
      setPeople([...people, newPerson]);
      // updating our array with friends = adding friend to our list
      setPerson({ firstName: "", email: "", label: "" });
    }
  };

  return (
    <>
      <form className="form">
        <div className="friends">
          <h1>Add your friends</h1>
          <GiThreeFriends style={{ fontSize: "40px", color: "#4f8b81" }} />
        </div>

        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={person.email}
          onChange={handleChange}
        />

        <label htmlFor="label">Label:</label>
        <input
          type="text"
          name="label"
          value={person.label}
          onChange={handleChange}
        />

        <button className="form-btn" typ="submit" onClick={handleSubmit}>
          add friend
        </button>
      </form>

      <List people={people} />
    </>
  );
};

export default Form;

/*
1. create a form that can take an input of information about a friend
2. we need to store the information about the friends somewhere in a list
3. first of all we need a state to be able to save information a friend
4. then we need one more state that can save an array of friends so that we can render it when
the form has been submitted
 */
