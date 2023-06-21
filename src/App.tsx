import "./App.css";
import Moon from "./components/Moon";
import TextWritter from "./components/TextWritter";
import Campfire from "./assets/campfire.mp4";
import { useEffect, useState } from "react";
import { tArray } from "./utils/texts.js";

function App() {
  const [currentText, setCurrentText] = useState("");

  function handleClick(e: any) {
    console.log(e);
  }

  useEffect(() => {
    setCurrentText(tArray[0].content);
  });

  return (
    <div className="main">
      <video className="video" autoPlay loop muted>
        <source src={Campfire} type="video/mp4" />
      </video>
      <div className="mask"></div>

      <Moon />
      <TextWritter text={currentText} delay={100} />

      <button className="btn" onClick={() => handleClick(currentText)}>
        <p className="neon-text">Answer</p>
      </button>
    </div>
  );
}

export default App;
