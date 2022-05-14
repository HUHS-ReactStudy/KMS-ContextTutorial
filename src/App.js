import logo from "./logo.svg";
import "./App.css";
import SelectColors from "./components/SelectColors";
import ColorBox from "./components/colorBox";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
