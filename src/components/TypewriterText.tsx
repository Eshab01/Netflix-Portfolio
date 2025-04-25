
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  className?: string;
}

const TypewriterText = ({ texts, delay = 2000, className }: TypewriterTextProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, textIndex]);

  const tick = () => {
    const fullText = texts[textIndex % texts.length];
    const updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.1);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(delay);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setTextIndex(textIndex + 1);
      setDelta(200);
    }
  };

  return (
    <span className={`${className} inline-block`}>
      {text}
      <span className="border-r-4 border-netflix-red animate-blink ml-1">&nbsp;</span>
    </span>
  );
};

export default TypewriterText;
