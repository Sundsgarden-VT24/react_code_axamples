import Button from "./Button";
import About from "./About";
import Footer from "./Footer";
import ReusableButton from "./ReusableButton";

const Home = () => {
  // we can put all of our components we want to use/display in Home
  // if we want to render more than one element we need a top level element
  // it can a div or a fragment <>
  return (
    <div className="container">
      <ReusableButton>Home Page Button</ReusableButton>
      <About />
      <Button />
      <Footer />
    </div>
  );
};

export default Home;
