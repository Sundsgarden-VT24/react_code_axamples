import ReusableButton from "./ReusableButton";

const About = () => {
  // we can use our ReusableButton in whatever component we like
  // we can also display different text on the button of each page
  return (
    <>
      <h1>Home</h1>
      <p>Some text here about Home Page</p>
      <ReusableButton>About Page Button</ReusableButton>
    </>
  );
};

export default About;
