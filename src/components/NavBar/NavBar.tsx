import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import LogoLight from "../../../public/images/emblem_light.svg";
import LogoDark from "../../../public/images/emblem_dark.svg";
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
  const [logo, setLogo] = useState(<LogoLight />);
  useEffect(() => {
    setLogo(theme == "light" ? <LogoLight /> : <LogoDark />);
  }, [theme]);
  return (
    <header className={styles.nav}>
      <a href="#home">
        <div className={styles.logo}>{logo}</div>
        <span className={styles.a11yLogo}>Home</span>
      </a>
      <nav>
        <button
          className={styles.menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="mobile menu toggle button"
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
