import "./App.css";
import Image from "./components/Image";
import ImageTextbox from "./components/ImgTextbox";
import Card from "./components/Card";

const testProperties = ["arttu", "kokki", "henrik"];

function App() {
  return (
    <div id="allContent">
      <div id="header">Header</div>

      <div id="content">
        <Image />
        <ImageTextbox />
        <Card properties={testProperties} isFirst={true} />
      </div>

      <div id="footer">Footer</div>
    </div>
  );
}

export default App;
