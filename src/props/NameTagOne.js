const NameTag = ({ firstName, lastName }) => {
  return (
    <div className="nametag">
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default NameTag;
