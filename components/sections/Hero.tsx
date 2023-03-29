import { useTranslation } from "next-i18next";
import React from "react";
import TypreWriter from "typewriter-effect";

interface HeroProps {
  className?: string;
  id?: string;
}

/**
 *
 * @return {React.ReactNode}
 */
const Hero: React.FC<HeroProps> = ({ className, id }) => {
  const { t } = useTranslation("hero");
  return (
    <section id={id} className={className}>
      <h1 className="snap-center text-[10vmin] font-semibold leading-tight md:px-10">
        <TypreWriter
          aria-hidden="true"
          options={{
            strings: [
              t("typed-str-0"),
              t("typed-str-1"),
              t("typed-str-2"),
              t("typed-str-3"),
            ],
            autoStart: true,
            loop: true,
            delay: Math.floor(Math.random() * (130 - 90 + 1)) + 90,
          }}
        />
        <span className="sr-only">{t("full-text")}</span>
      </h1>
    </section>
  );
};
export default Hero;
