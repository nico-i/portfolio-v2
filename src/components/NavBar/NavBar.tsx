import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import LogoLight from "../../../public/images/emblem_light.svg";
import LogoDark from "../../../public/images/emblem_dark.svg";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import styles from "./NavBar.module.css";
import navLinks from "../../data/navData.json";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("nav");
  return (
    <header className={styles.nav}>
      <a href="#home">
        <div className="w-12 h-12">{logo}</div>
        <span className="sr-only">{t("home")}</span>
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
            { "translate-x-0": isMenuOpen },
            { "translate-x-full": !isMenuOpen }
          )}
        >
          {navLinks.map((navLink) => (
            <li className={styles.navItem} key={navLink.text}>
              <a
                onClick={() => setIsMenuOpen(false)}
                className={styles.navLink}
                href={navLink.href}
              >
                {t(navLink.text)}
              </a>
            </li>
          ))}
          <li className={styles.modeToggle}>
            <DarkModeButton onThemeChange={onThemeChange} theme={theme} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
