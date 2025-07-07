import React, { useEffect, useState } from "react";

const TypingBounce = ({ text, trigger }) => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setKey((k) => k + 1);
      setVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [trigger]);

  if (!visible) return null;

  return (
    <div
      key={key}
      style={{
        fontFamily: "monospace",
        fontSize: "clamp(1.5rem, 6vw, 4rem)", // responsive font size
        borderRight: "3px solid #007BFF",
        whiteSpace: "nowrap",
        overflow: "hidden",
        width: 0,
        maxWidth: "90vw", // max width fits phone screen
        animation: `typing 2.5s steps(${text.length}, end) forwards, blink 1s step-end infinite 2.5s`,
        margin: "20px auto",
        color: "#222",
        textAlign: "center",
      }}
    >
      {text}
      <style>{`
       @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink {
          0%, 100% { border-color: transparent }
          50% { border-color: #007BFF }
        }
      `}</style>
    </div>
  );
};

export default function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 60,
        fontFamily: "'Segoe UI', sans-serif",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        minHeight: "100vh",
        padding: "5vw",
        boxSizing: "border-box",
      }}
    >
      <button
        onClick={() => setClicks((c) => (c >= 2 ? 0 : c + 1))}
        style={{
          padding: "12px 24px",
          fontSize: "clamp(1rem, 4vw, 1.5rem)", // responsive button font
          fontWeight: "600",
          borderRadius: 10,
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,123,255,0.3)",
          transition: "0.3s ease",
          maxWidth: "90%",
        }}
      >
        Counter?
      </button>

      {clicks === 1 && (
        <div
          style={{
            fontSize: "clamp(3rem, 12vw, 5rem)",
            marginTop: 30,
            fontWeight: "bold",
            color: "#333",
            userSelect: "none",
          }}
        >
          1
        </div>
      )}

      {clicks === 2 && <TypingBounce text="pababy naman oh" trigger={clicks} />}
    </div>
  );
}
