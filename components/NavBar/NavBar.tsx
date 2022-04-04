import Image from "next/image";
import React from "react";
import darkLogo from "../../public/images/emblem_dark.svg";
import lightLogo from "../../public/images/emblem_light.svg";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import styles from "./NavBar.module.css";

interface Props {
  onThemeChange: Function;
  theme: string;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function NavBar({ onThemeChange, theme }: Props) {
  return (
    <header className={styles.nav}>
      <a href="#home">
        <Image
          src={theme === "dark" ? darkLogo : lightLogo}
          alt="Nico Ismaili Logo"
          height={50}
        />
      </a>
      <DarkModeButton onThemeChange={onThemeChange} theme={theme} />
    </header>
  );
}
