import { useState } from "react";

const Form = () => {
  /*const [inputData, setInputData] = useState({
    firstName: "",
    message: "",
  });*/
  /*
  Forms in React work a little bit differently than you may be used to if you’re not 
  used to working with React. When working with forms in React, 
  it’s all about managing state and then using that state to populate your form.

  In React, we get the form’s values from the state, so we need to set the values on our inputs.

  If you try typing in your inputs, you’ll notice that they aren’t updating. 
  Why is that? Think about it for a second: You set the values 
  equal to our state object and the state object is just a few empty strings.

In order to update the value in the form, you have to update the 
value of the state. Here’s how we’re going to do that.

We’re going to add an onChange function that sets our state to the value of the input.

First, this function is being called anytime the value of the input changes. Whenever you type something, 
this function fires.

This takes the event (e) and passes it to the setFormData() function. 
We can’t just set part of the formData, we have to set the full thing. 
So, we say, take whatever is in the form (…formData) and set that and then
add the key and value title: e.target.value.

<input
          onChange={(e) => setInputData({...inputData, firstName: e.target.value})}
          value={firstName}
          type="text"
          name="firstName"
          id="firstName"
        />
  */

  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, message);
  };

  return (
    <div>
      <h1>Form Input Example</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          name="firstName"
          id="firstName"
        />
        <label htmlFor="message">Message</label>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          name="message"
          id="message"
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
