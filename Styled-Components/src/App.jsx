import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Buttons } from "./Components/Buttons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Buttons>Primary Button</Buttons>
      <Buttons>Default Button</Buttons>
      <Buttons>Dashed Button</Buttons>
      <Buttons>Text Button</Buttons>
      <a href="#">
        <Buttons>link Button</Buttons>
      </a>
    </div>
  );
}

export default App;
