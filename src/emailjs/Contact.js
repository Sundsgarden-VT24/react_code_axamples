import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "klarr_contact",
        form.current,
        "user_r7fhXAnQHvxYsk0sZ6R0g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <label className="form-control">Name:</label>
      <input type="text" name="user_name" />
      <label className="form-control">Email:</label>
      <input type="email" name="user_email" />
      <label className="form-control">Message:</label>
      <textarea rows={5} name="message"></textarea>
      <div>
        <button className="btn" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
