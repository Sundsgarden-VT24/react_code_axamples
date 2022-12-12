import NameTag from "./props/NameTag";
import { useState } from "react";


const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Doris", lastName: "Dorisson" },
  { firstName: "Janne", lastName: "Jannesson" },
];

const Home = () => {
  const [names, setNames] = useState(initialNames);
  // return an array with 2 values, one is getter and one is setter

  return (
    <div className="home">
      {names.map((v, i) => {
        return (
          <NameTag key={i} firstName={v.firstName} lastName={v.lastName} />
        );
      })}
    </div>
  );
};

export default Home;