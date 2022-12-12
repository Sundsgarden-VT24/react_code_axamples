import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Login from "./Login";
import ButtonBar from "./ButtonBar";

function App() {
  <BrowserRouter>
    <Container className="p-3">
      <h1>React Bootstrap Demo</h1>
      <h2>
        <ButtonBar />
      </h2>
      <h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </h2>
    </Container>
  </BrowserRouter>;
}

export default App;
