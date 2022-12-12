import { Link } from "react-router-dom";
import ReusableButton from "./ReusableButton";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ReusableButton reverse={false}>About sidan..</ReusableButton>
      <div style={{ marginTop: "10px" }} className="link__list">
        <ul>
          <li>
            <Link className="abouts" to="/about/p1">
              Page 1
            </Link>
          </li>
          <li>
            <Link className="abouts" to="/about/p2">
              Page 2
            </Link>
          </li>
          <li>
            <Link className="abouts" to="/about/p3">
              Page 3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
