import { memo, useState } from "react";
import { Outlet } from "react-router-dom";
import "../index.css";

function GlobalLayout() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  if (isDarkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <header className="header">
        <h3 className="logo">Countries</h3>
        <p
          className={`${isDarkMode ? "dark" : "light"} changeTheme`}
          onClick={toggleTheme}
        >
          <span>{isDarkMode ? "Light " : "Dark "}</span>Mode
        </p>
      </header>
      <Outlet />
    </div>
  );
}
export default memo(GlobalLayout);
