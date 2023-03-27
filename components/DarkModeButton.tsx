import React, { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

interface Props {
  onThemeChange: Function;
  theme: string;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function DarkModeButton({ onThemeChange, theme }: Props) {
  const [icon, setIcon] = useState(<RiMoonFill />);
  useEffect(() => {
    setIcon(theme === "light" ? <RiMoonFill /> : <RiSunFill />);
  }, [theme]);
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
      className="text-light dark:text-dark text-xl bg-dark dark:bg-light p-1 rounded-full"
    >
      {icon}
    </button>
  );
}
