import { useEffect, useState } from "react";
import "./style.css";

interface TextWritterProps {
  text: string;
  delay: number;
}

const TextWritter = ({ text, delay }: TextWritterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [text, delay, currentIndex]);

  return <span className="neon-text">{displayText}</span>;
};

export default TextWritter;
