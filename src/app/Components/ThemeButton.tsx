"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
export default function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.querySelector("body");
      if (isDarkMode) {
        localStorage.setItem("theme", "dark");
        body?.classList.add("dark-mode");
        body?.classList.remove("light-mode");
      } else {
        localStorage.setItem("theme", "light");
        body?.classList.add("light-mode");
        body?.classList.remove("dark-mode");
      }
    }
    console.log(localStorage);
  }, [isDarkMode]);
  return (
    <button
      onClick={handleClick}
      className="p-3 hover:backdrop-brightness-90 rounded-full"
    >
      {!isDarkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
}
