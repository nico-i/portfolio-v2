import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import styles from "./DarkModeButton.module.css";

interface Props {
  onThemeChange: Function;
  theme: string;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function DarkModeButton({ onThemeChange, theme }: Props) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
      className={styles.themeToggle}
    >
      {theme === "dark" ? <RiSunFill /> : <RiMoonFill />}
    </button>
  );
}
