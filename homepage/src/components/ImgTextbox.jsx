import storefrontImage from "../imgs/storefront.jpg";

const styles = {
  height: "fit-content",

  display: "flex",
  flexDirection: "row",
  padding: "3.5em",
  sizing: "border-box",
  alignItems: "stretch",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  gap: "3em",
};

const textStyles = {
  width: "clamp(250px, 90vw, 45%)",
  flex: "1 0 auto",
};

const imageboxStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "top",
  width: "clamp(500px, 40vw, 45%)",
  flex: "1 0 auto",
  height: "auto",
};

const imgStyles = {
  width: "clamp(500px, 40vw, 45%)",
  flex: "1 0 auto",
  height: "auto",
  objectFit: "cover",
};

const headingStyles = {
  fontSize: "clamp(21px, 2em, 3em)",
  marginBottom: "1em",
};

const paraStyles = {
  fontSize: "clamp(14px, 1.5em, 2em)",
};

const ImageTextbox = () => {
  return (
    <div className="textbox" style={styles}>
      <div className="text" style={textStyles}>
        <h3 style={headingStyles}>Verkkosivut</h3>
        <p style={paraStyles}>
          Verkkosivut ovat kuin kivijalkamyymällä Mannerheimintiellä,
          lukuunottamatta järkyttävää vuokraa. Etusivu on näyteikkuna, josta
          asiakas saa ensivaikutelman yrityksen tuotteista, arvoista sekä
          imagosta. Liikkeeseen astuessa asiakkaalle tulee näkyviin erilaiset
          hyllyt tai tuote-esitteet, ja liikkeen tunnelma tarkentuu
          todellisemmaksi ensivaikutelmasta. Lopuksi kassan sijaan
          verkkosivuilta löytyy myyjän sijaan helppokäyttöinen ostoskori ja
          maksutapahtuma, tai yhteydenottolomake kauppojen sopimiseksi.
          <br />
          Me tarjoamme teille tämän tyylikkään liikkeen helpolla prosessilla, ja
          kuukausihinnoittelumme ansiosta verkkosivut järjestyvät kuin valmiiksi
          sisustetun liiketilan vuokraus.
        </p>
      </div>

      <div className="image" style={imageboxStyles}>
        <img
          src={storefrontImage}
          alt="image of a storefront"
          style={imgStyles}
        />
      </div>
    </div>
  );
};

export default ImageTextbox;
