import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:pageId" element={<AboutPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

// top level ska alltid vara browserrouter
// path=/ är alltid default alltså http://localhost:3000 egen domän va =
// http://klarr.se
/*
When using react-router version 5, we use this switch 
component which is provided by the react-router package 
to wrap our routes, and make sure that only one of these 
routes is loaded at the same time instead of all matching 
routes. And typically, that is what you want — 
you want to define 
multiple routes but only one route should be active at a 
given point of time

Now with react-router version 6, switch doesn’t exist anymore. 
Instead, this now becomes routes so you replace the switch 
with routes and you, therefore, import routes from react-router 
dom instead of switch.

By the way, what hasn’t changed is that you still import 
browser router from react-router-dom, and you wrap that 
around your app where you then plan to use routing that’s 
exactly the same syntax as you know it:

The reason for this is that the way how we define our routes 
also changed we still have the route component 
and it still takes a path prop:
So you don’t pass welcome as a string you don’t pass a pointer 
to that component function instead you pass the JSX element. 
Hence the name element wants a JSX element and then this can, 
of course, become a self-closing component this route component.
*/
