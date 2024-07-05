const Card = ({ properties, isFirst }) => {
  const includesPreviousProperties = () => {
    if (!isFirst) {
      return <p>Edelliset ominaisuudet sekä...</p>;
    } else {
      return <p>Pakettiin sisältyy:</p>;
    }
  };

  console.table(properties);

  return (
    <div className="card">
      {includesPreviousProperties()}
      <ul>
        {properties.map((property) => {
          // eslint-disable-next-line react/jsx-key
          return <li>{property}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
