import React, { useEffect, useState } from 'react';
import './Greeting.css';

const Greeting = () => {
  const [parts, setParts] = useState([]);
  const [moveToTopLeft, setMoveToTopLeft] = useState(false);

  useEffect(() => {
    const words = ["Hello", " ","I", 'am', 'Shreeraksha', 'P', 'Bhat'];
    let index = 0; // Start index at 0
    const interval = setInterval(() => {
      setParts((prevParts) => [...prevParts, { word: words[index], bounce: true }]);
      // Increment index after each interval
      if (index === words.length-1) {
        clearInterval(interval); // Clear interval when all words have been added
        // Set timeout to move greetings to top left after animation
        setTimeout(() => {
          setMoveToTopLeft(true);
        }, 3000); // Adjust time as needed based on the animation duration
      }
      index += 1;
    }, 500); // Adjust the speed of the animation here

    return () => clearInterval(interval); // Cleanup function
  }, []);

  useEffect(() => {
    if (moveToTopLeft) {
      // Remove move-to-top-left class after animation completes
      const timeoutId = setTimeout(() => {
        setMoveToTopLeft(false);
      }, 1000); // Adjust time as needed based on the animation duration
      return () => clearTimeout(timeoutId);
    }
  }, [moveToTopLeft]);

  return (
    <div className={`greeting-container ${moveToTopLeft ? 'move-to-top-left' : ''}`}>
      <div className="greeting">
        {parts.map((part, index) => (
          <span key={index} className={`greeting-part ${part.bounce ? 'bounce' : ''}`}>
            {part.word}{index !== parts.length - 1 && '\u00A0'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Greeting;
