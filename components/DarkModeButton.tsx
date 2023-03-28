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
      className="rounded-full bg-dark p-1 text-xl text-light dark:bg-light dark:text-dark"
    >
      {icon}
    </button>
  );
}
