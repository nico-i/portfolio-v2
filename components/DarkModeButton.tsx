import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

/**
 *
 * @return {React.ReactNode}
 */
export default function DarkModeButton() {
  const [icon, setIcon] = useState(<RiMoonFill />);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIcon(theme === "light" ? <RiMoonFill /> : <RiSunFill />);
  }, [theme]);
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-light dark:text-dark text-xl bg-dark dark:bg-light p-1 rounded-full"
    >
      {icon}
    </button>
  );
}
