import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme);

  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeButton;
