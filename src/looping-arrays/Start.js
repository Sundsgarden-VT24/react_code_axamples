import NameTag from "./components/NameTag";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NameTag firstName="Helena" lastName="Johansson" />
      <NameTag firstName="Tore" lastName="Toresson" />
      <NameTag firstName="Doris" lastName="Dorisson" />
    </div>
  );

}

export default App;