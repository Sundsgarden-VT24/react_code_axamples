import ReusableButton from "./props/ReusableButton";
import NameTag from "./props/NameTag";
import { useState } from "react";

/*
VERSION #4
Så vi har våra tre nametags här, men tänk om vi ville
en annan namnskylt eller låt oss säga att vi ville ha 20 av dem?
Vi vet att vi inte vill upprepa oss själva...

det finns ett sätt vi kan få det här att fungera på ett bättre sätt

vi ska alltså loopa men inte använda en for loop utan inbygt array metod som heter map

mapfunktionen tar ett värde och ett index som argument och returnerar sedan något
En ny array där varje element är resultatet av callbacken
istället för hårdkodning kan vi nu använda v.firstName och samma för efternamn och vi får
samma resultat
om vi inspekterar har vi ett fel
detta fel beror på att när vi har en lista som denna måste reager hålla reda på
på vad som har lagts till och tagits bort så att det kan rendera saker därefter
så du behöver en rekvisita
vi kan tillhandahålla i key={i}
det här fungerar här eftersom vi inte lägger till eller tar bort saker men om vi skulle göra det
detta kommer inte att fungera eftersom till exempel först tar vi bort efternamnet storleken är två och
om vi lägger till sin threee igen så får vi samma index igen - inte unikt
för att fixa detta finns det flera sätt att göra detta, jag kommer att visa dig ett superenkelt sätt nästa vecka.
{`${i}${v.firstName}${v.lastName}`}

const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Doris", lastName: "Dorisson" },
  { firstName: "Janne", lastName: "Jannesson" },
];
*/

const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Doris", lastName: "Dorisson" },
  { firstName: "Janne", lastName: "Jannesson" },
];

const Home = () => {
  const [names, setNames] = useState(initialNames);
  // names = array med object
  // return an array with 2 values, one is getter and one is setter

  return (
    <div className="home">
      {names.map((v, i) => {
        // names = array med object
        // loopar igenom array, för varje namn som är i arrayen
        // så ska vi visa en NameTag komponent
        return (
          <NameTag key={i} firstName={v.firstName} lastName={v.lastName} />
        );
      })}
    </div>
  );
};

export default Home;

/*
#1
 <div className="home">
      <h1>React Router Demo</h1>
      <ReusableButton reverse={true}>Återanvändbar</ReusableButton>
      <p>Item</p>
      <p>Item</p>
    </div>

    #2
     <div className="home">
      <NameTag firstName="Helena" lastName="Johansson" />
      <NameTag firstName="Tore" lastName="Toresson" />
      <NameTag firstName="Doris" lastName="Dorisson" />
    </div>

    #3 
    const [names, setNames] = useState(initialNames);
  // return an array with 2 values, one is getter and one is setter

  return (
    <div className="home">
      <NameTag firstName={names[0].firstName} lastName={names[0].lastName} />
      <NameTag firstName={names[1].firstName} lastName={names[1].lastName} />
      <NameTag firstName={names[2].firstName} lastName={names[2].lastName} />
    </div>
  );
*/
