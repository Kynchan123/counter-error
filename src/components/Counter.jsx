import React from "react";
import style from "./Counter.css";

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [clicks, setClicks] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  const handleClick = () => {
    if (clicks >= 2) {
      setClicks(0);
      setShowTyping(false);
    } else {
      setClicks((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (clicks === 2) {
      setShowTyping(false);
      setTimeout(() => setShowTyping(true), 50); // small delay to reset animation
    }
  }, [clicks]);

  return (
    <div className="container">
      <button onClick={handleClick}>Click Me</button>

      {clicks === 1 && <div className="number">1</div>}

      {clicks === 2 && showTyping && (
        <div className="typing bouncing">pababy naman oh</div>
      )}
    </div>
  );
}

export default Counter;
