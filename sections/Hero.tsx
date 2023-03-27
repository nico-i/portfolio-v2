import { useTranslation } from "next-i18next";
import React from "react";
import TypreWriter from "typewriter-effect";
/**
 *
 * @return {React.ReactNode}
 */
export default function Hero() {
  const { t } = useTranslation("hero");
  return (
    <h1 className="text-[11.5vmin] md:px-10 font-semibold leading-tight">
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
  );
}
