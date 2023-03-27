import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import navLinks from "../data/navLinks.json";
import LogoDark from "../public/images/emblem_dark.svg";
import LogoLight from "../public/images/emblem_light.svg";
import DarkModeButton from "./DarkModeButton";

/**
 *
 * @return {React.ReactNode}
 */
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation("nav");
  return (
    <header className="transition z-50 fixed flex items-center w-screen justify-between bg-light dark:bg-dark py-2 pt-4 md:pt-6 lg:pt-10 px-4 md:px-8 lg:px-12">
      <Link href="/#home">
        <div className="w-12 h-12">
          <LogoDark className="dark:block hidden" />
          <LogoLight className="block dark:hidden" />
        </div>
        <span className="sr-only">{t("home")}</span>
      </Link>
      <nav>
        <button
          className="transition text-dark dark:text-light text-3xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="mobile menu toggle button"
        >
          <HiMenu />
        </button>
        <ul
          className={classNames(
            "transition fixed left-0 right-0 min-h-screen bg-light dark:bg-dark space-y-8 p-8 transform md:translate-x-0 mt-2 md:mt-0 md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-10 md:p-0",
            { "translate-x-0": isMenuOpen },
            { "translate-x-full": !isMenuOpen }
          )}
        >
          {navLinks.map((navLink) => (
            <li className="flex items-center" key={navLink.text}>
              <Link
                href={`/${navLink.href}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl bg-[position:0%_110%] font-semibold bg-[length:0%_0.3em] hover:bg-[length:100%_0.3em] active:bg-[length:100%_0.3em] h-[1.9rem] ease-in-out transition-[background-size] duration-500 no-underline bg-no-repeat bg-gradient-to-r from-primary to-primary dark:from-primary_dark dark:to-primary_dark"
              >
                {t(navLink.text)}
              </Link>
            </li>
          ))}
          <li className="flex items-center justify-center md:static absolute bottom-28 right-0 left-0">
            <DarkModeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
