import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });

  const handleScreenClick = (event) => {
    setLogoPosition({ x: event.clientX, y: event.clientY });
  };

 
  useEffect(() => {
    document.addEventListener('click', handleScreenClick);

    return () => {
      document.removeEventListener('click', handleScreenClick);
    };
  }, []);

  return (
    <div className="container">
      <img src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif" alt="Logo" className="logo"
        style={{
          transform: `translate(${logoPosition.x}px, ${logoPosition.y}px)`,width:'120px'
        }}
      />
    </div>
  );
}

export default App;
