import React, { useEffect, useState } from "react";
import "./TypingBounce.css";

export default function TypingBounce({ text, trigger }) {
  const [animationKey, setAnimationKey] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    setShowTyping(false);
    const timer = setTimeout(() => {
      setAnimationKey((k) => k + 1); // reset animation by remounting div
      setShowTyping(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [trigger]);

  if (!showTyping) return null;

  return (
    <div
      key={animationKey}
      className="typing bouncing"
      style={{ "--text-length": text.length }}
    >
      {text}
    </div>
  );
}
