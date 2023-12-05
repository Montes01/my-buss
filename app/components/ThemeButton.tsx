"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
export default function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (document) {
      const body = document.querySelector("body");
      if (isDarkMode) {
        body?.classList.add("dark-mode");
        body?.classList.remove("light-mode");
      } else {
        body?.classList.add("light-mode");
        body?.classList.remove("dark-mode");
      }
    }
  }, [isDarkMode]);
  return (
    <button
      onClick={handleClick}
      className="p-3 backdrop-brightness-90 rounded-full"
    >
      {!isDarkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
}
