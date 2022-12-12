import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const ButtonBar = () => {
  return (
    <ButtonToolbar className="custom-btn-toolbar">
      <Link to="/">
        <Button className="colored-btn">Home</Button>
      </Link>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <Link to="/users">
        <Button>Users</Button>
      </Link>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </ButtonToolbar>
  );
};

export default ButtonBar;
