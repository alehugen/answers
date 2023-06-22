import { useEffect, useState } from "react";
import "./style.css";

interface TextWritterProps {
  text: string;
  delay: number;
  showButton: any;
}

const TextWritter = ({ text, delay, showButton }: TextWritterProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout: any;

    const animateText = (text: string) => {
      let currentIndex = 0;
      let newText = "";

      const interval = setInterval(() => {
        newText += text[currentIndex];
        setDisplayText(newText);
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(interval);
          showButton(true);
        }
      }, delay);
    };

    if (text) {
      setDisplayText(""); // Limpa o texto atual

      timeout = setTimeout(() => {
        animateText(text);
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return <span className="neon-text">{displayText}</span>;
};

export default TextWritter;
