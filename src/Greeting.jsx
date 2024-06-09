import React, { useEffect, useState } from 'react';
import './Greeting.css';
import myImage from './assets/shreepfp.jpeg';

const Greeting = () => {
  const [parts, setParts] = useState([]);
  const [moveToTopLeft, setMoveToTopLeft] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const words = ["Hello,", " ", "I", "am", "Shreeraksha", "P", "Bhat"];
    let index = 0;
    const interval = setInterval(() => {
      setParts((prevParts) => [...prevParts, { word: words[index], bounce: true }]);
      if (index === words.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          setMoveToTopLeft(true);
        }, 3000);
      }
      index += 1;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (moveToTopLeft) {
      const timeoutId = setTimeout(() => {
        setMoveToTopLeft(false);
        setShowAboutMe(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [moveToTopLeft]);

  useEffect(() => {
    if (showAboutMe) {
      const timeoutId = setTimeout(() => {
        setShowNavbar(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [showAboutMe]);

  return (
    <div>
      <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Certifications</a></li>
        </ul>
      </nav>
      <div className="container">
      {showAboutMe && (
          <img src={myImage} alt="Description of the image" className="left-image" />
        )}
        <div className={`greeting-container ${moveToTopLeft ? 'move-to-top-left' : ''}`}>
          <div className="greeting">
            {parts.map((part, index) => (
              <span key={index} className={`greeting-part ${part.bounce ? 'bounce' : ''}`}>
                {part.word}{index !== parts.length - 1 && '\u00A0'}
              </span>
            ))}
          </div>
        </div>
        {showAboutMe && (
          <div className="about-me">
            <p>
              I am an enthusiastic and dedicated engineering student with a passion for innovation and technology.
              My journey in the field of engineering has equipped me with a diverse skill set and a keen problem-solving
              ability. I am constantly seeking opportunities to apply my knowledge and contribute to meaningful projects.
            </p>
          </div>
        )}
      </div>
      
    </div>
  );
};


export default Greeting;
