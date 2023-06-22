import "./App.css";
import Moon from "./components/Moon";
import TextWritter from "./components/TextWritter";
import Campfire from "./assets/campfire.mp4";
import { useEffect, useState, useRef } from "react";
import { paragraphs } from "./utils/index.ts";
import music from "./assets/OceanWaves.mp3";

function App() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(false);

  const size = paragraphs.length - 1;

  function handleClick(e: string) {
    const i = paragraphs.findIndex((item) => item.includes(e));
    setShow(false);
    setCurrentIndex(i + 1);
    setCurrentText(paragraphs[currentIndex + 1]);
  }

  useEffect(() => {
    setCurrentText(paragraphs[0]);
  }, []);

  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement: any = audioRef.current;

    const handleClick = () => {
      audioElement?.play();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="main">
      <audio ref={audioRef} src={music} loop>
        <source src={music} type="audio/mpeg" />
      </audio>
      <video className="video" autoPlay loop muted>
        <source src={Campfire} type="video/mp4" />
      </video>
      <div className="mask"></div>

      <Moon />

      <TextWritter text={currentText} delay={70} showButton={setShow} />

      {show && currentIndex < size ? (
        <button className="btn" onClick={() => handleClick(currentText)}>
          <p className="neon">Continue</p>
        </button>
      ) : null}
    </div>
  );
}

export default App;
