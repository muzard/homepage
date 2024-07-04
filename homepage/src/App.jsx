import "./App.css";
import Image from "./components/Image";
import ImageTextbox from "./components/ImgTextbox";

function App() {
  return (
    <div id="allContent">
      <div id="header">Header</div>

      <div id="content">
        <Image />
        <ImageTextbox />
      </div>

      <div id="footer">Footer</div>
    </div>
  );
}

export default App;
