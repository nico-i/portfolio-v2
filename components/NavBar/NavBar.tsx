import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.nav}>
      <a href="#home">
        <Image
          src={theme === "light" ? lightLogo : darkLogo}
          alt="Nico Ismaili Logo"
          height={50}
        />
      </a>
      <nav>
        <button
          className={styles.menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenu />
        </button>
        <ul
          className={classNames(
            styles.navList,
            { showMenu: isMenuOpen },
            { hideMenu: !isMenuOpen }
          )}
        >
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#about">
              über mich
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#projects">
              projekte
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#contact">
              kontakt
            </a>
          </li>
          <li className={styles.modeToggle}>
            <DarkModeButton onThemeChange={onThemeChange} theme={theme} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
