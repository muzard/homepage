const style1 = {
  paddingTop: "6em",
  paddingLeft: "7em",
};

const style2 = {
  paddingLeft: "10em",
};

const Image = () => {
  return (
    <div className="photoWithText">
      <h2 style={style1}>Taattu laatu.</h2>
      <h2 style={style2}>Järkevä hinta.</h2>
    </div>
  );
};

export default Image;
