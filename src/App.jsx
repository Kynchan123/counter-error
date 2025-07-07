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
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: 72,
        color: "#222",
        fontWeight: "700",
        borderRight: "3px solid #007BFF", // bright blue cursor
        whiteSpace: "nowrap",
        overflow: "hidden",
        width: 0,
        animation: `typing 3s steps(${text.length}, end) forwards, blink 1s step-end infinite 3s`,
        margin: "20px auto",
        maxWidth: `${text.length}ch`,
        textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        userSelect: "none",
        cursor: "default",
      }}
      aria-label={text}
      role="text"
    >
      {text}
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: ${text.length}ch }
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
        marginTop: 80,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <button
        onClick={() => setClicks((c) => (c >= 2 ? 0 : c + 1))}
        style={{
          padding: "14px 28px",
          fontSize: 22,
          fontWeight: "600",
          borderRadius: 8,
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,123,255,0.3)",
          transition: "background-color 0.3s ease",
          userSelect: "none",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#0056b3")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#007BFF")
        }
      >
        Counter?
      </button>

      {clicks === 1 && (
        <div
          style={{
            fontSize: 80,
            marginTop: 30,
            fontWeight: "bold",
            color: "#333",
            textShadow: "2px 2px 6px rgba(0,0,0,0.1)",
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
