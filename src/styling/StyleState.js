const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Doris", lastName: "Dorisson" },
];

const nameStyle = {
  color: "green",
  border: "1px solid green",
};

const nameStyleTitle = {
  borderStyle: "dotted",
  letterSpacing: "1px",
};

function App() {
  const [names, setNames] = useState(initialNames);
  // names = array med object
  // return an array with 2 values, one is getter and one is setter

  return (
    <div className="container">
      <h1 style={{ ...nameStyle, ...nameStyleTitle }}>Name List</h1>
      <h3 style={{ color: "magenta", border: "1p solid black" }}>Hej hej</h3>
      <h3 style={nameStyle}>Hej hej</h3>
      <NameTag
        style={{ color: "pink" }}
        firstName="Helena"
        lastName="Johansson"
      />
      <NameTag firstName="Nisse" lastName="Johansson" />
      <NameTag firstName="Sara" lastName="Johansson" />
    </div>
  );
}

export default App;

/*
    
    const nameStyle = {
      color: "green",
      border: "1px solid green",
    };
    
    const nameStyleTitle = {
      borderStyle: "dotted",
      letterSpacing: "1px",
    };
    
     <NameTag firstName={names[0].firstName} lastName={names[0].lastName} />
          <NameTag firstName={names[1].firstName} lastName={names[1].lastName} />
          <NameTag firstName={names[2].firstName} lastName={names[2].lastName} />
    
    <div className="container">
          <h1 style={{ ...nameStyle, ...nameStyleTitle }}>Name List</h1>
          <h3 style={{ color: "magenta", border: "1p solid black" }}>Hej hej</h3>
          <h3 style={nameStyle}>Hej hej</h3>
          <NameTag
            style={{ color: "pink" }}
            firstName="Helena"
            lastName="Johansson"
          />
          <NameTag firstName="Nisse" lastName="Johansson" />
          <NameTag firstName="Sara" lastName="Johansson" />
        </div>
  
         <div className="container">
        {names.map((n, i) => {
          // names = array med object
          // loopar igenom array, för varje namn som är i arrayen
          // så ska vi visa en NameTag komponent
          return (
            <NameTag key={i} firstName={n.firstName} lastName={n.lastName} />
          );
        })}
      </div>
  
  
  
  
  
      // 1. Inline styling
  // className === class
  
  // 2. Object styling
  
  // 3. css classes with className
  /*
   <h1 style={{ color: "magenta", borderTop: "1px solid" }}>
          Different styling in React
        </h1>
        <h1 style={{ ...objectStyle, ...objectTitle }}>This is our title</h1>
        <h2 style={objectStyle}>Styling with object</h2>
        <h2 className="css-style objectTitle">Style with css</h2>
  
        const objectStyle = {
    color: "orange",
    border: "1px solid black",
    padding: "5px",
  };
  
  const objectTitle = {
    color: "black",
  };
  
   <Tag firstName={names[0].firstName} lastName={names[0].lastName} />
        <Tag firstName={names[1].firstName} lastName={names[1].lastName} />
        <Tag firstName={names[2].firstName} lastName={names[2].lastName} />
        <Tag firstName={names[3].firstName} lastName={names[3].lastName} />
  
         <h1>List with names</h1>
        {names.map((v, i) => {
          return <Tag key={i} firstName={v.firstName} lastName={v.lastName} />;
        })}
  
        const initialNames = [
    { firstName: "Helena", lastName: "Johansson" },
    { firstName: "Anna", lastName: "Andersson" },
    { firstName: "Bengt", lastName: "Bengtsson" },
    { firstName: "Sara", lastName: "Nilsson" },
    { firstName: "Test", lastName: "Test" },
  ];
  
        */
