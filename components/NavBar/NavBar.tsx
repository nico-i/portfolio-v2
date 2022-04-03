import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import darkLogo from "../../public/images/emblem_dark.svg";
import lightLogo from "../../public/images/emblem_light.svg";
import styles from "./NavBar.module.css";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
/**
 *
 * @return {React.ReactNode}
 */
export default function NavBar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className={styles.nav}>
      <a href="#home">
        <Image
          src={theme === "dark" ? darkLogo : lightLogo}
          alt="Nico Ismaili Logo"
          height={50}
        />
      </a>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 h-12 w-12 dark:text-light text-dark"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div className={styles.themeToggle}>
          {theme === "dark" ? <RiSunFill /> : <RiMoonFill />}
        </div>
      </button>
    </header>
  );
}
