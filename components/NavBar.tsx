import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import LogoDark from "../public/images/emblem_dark.svg";
import LogoLight from "../public/images/emblem_light.svg";
import DarkModeButton from "./DarkModeButton";

interface NavBarProps {
  navLinks: {
    href: string;
    text: string;
  }[];
}

/**
 *
 * @return {React.ReactNode}
 */
export default function NavBar({ navLinks }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="items-top fixed z-50 flex w-screen justify-between bg-inherit px-5 py-4 md:items-center md:px-8 md:pt-6 lg:px-12 lg:pt-10">
      <Link
        href={navLinks[0].href}
        passHref
        className="z-20 h-8 w-8 md:h-12 md:w-12"
      >
        <LogoDark className="hidden dark:block" />
        <LogoLight className="block dark:hidden" />
        <span className="sr-only">{navLinks[0].text}</span>
      </Link>

      <button
        className="z-20 text-3xl text-dark transition dark:text-light md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="mobile menu toggle button"
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>
      <ul
        className={classNames(
          "fixed inset-x-0 top-14 z-10 h-screen space-y-8 p-8 md:static md:inset-auto md:top-auto md:flex md:h-auto md:translate-x-0 md:space-x-10 md:space-y-0 md:bg-transparent md:p-0",
          { "translate-x-0": isMenuOpen },
          { "translate-x-full": !isMenuOpen }
        )}
      >
        {navLinks.slice(1).map((navLink) => (
          <li className="flex items-center" key={navLink.text}>
            <Link
              href={`/${navLink.href}`}
              onClick={() => setIsMenuOpen(false)}
              className="h-[1.9rem] bg-gradient-to-r from-primary to-primary bg-[length:0%_0.3em] bg-[position:0%_110%] bg-no-repeat text-xl font-semibold no-underline transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_0.3em] active:bg-[length:100%_0.3em] dark:from-primary_dark dark:to-primary_dark"
            >
              {navLink.text}
            </Link>
          </li>
        ))}
        <li className="flex items-center justify-center">
          <DarkModeButton />
        </li>
      </ul>
    </nav>
  );
}
