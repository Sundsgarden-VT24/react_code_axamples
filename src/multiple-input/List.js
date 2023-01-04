import "./multiple.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, firstName, email, label } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <div className="flex-container">
              <p>{email}</p>
              <div className="info">{label}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
