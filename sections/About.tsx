import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import pbImage from "../public/images/pb.png";

/**
 *
 * @return {React.ReactNode}
 */
export default function About() {
  const { t } = useTranslation("about");
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <div className="hidden md:flex overflow-hidden rounded-full bg-primary outline outline-light dark:outline-dark outline-offset-[-1] dark:bg-primary_dark max-w-xs justify-self-center items-center transition-[outline-color]">
        <Image alt={t("profile-img-alt")} src={pbImage} />
      </div>
      <div className="max-w-2xl justify-self-start">
        <h2 className="font-semibold text-4xl mb-4 leading-tight">
          <span dangerouslySetInnerHTML={{ __html: t("h2-0-txt-0") }} />
        </h2>
        <p>
          {t("p-1-txt-0")}
          <a href={t("p-1-a-0-href")} target="_blank" rel="noreferrer">
            {t("p-1-a-0-txt")}
          </a>
          {t("p-1-txt-1")}
          <a href={t("p-1-a-1-href")} target="_blank" rel="noreferrer">
            {t("p-1-a-1-txt")}
          </a>
          {t("p-1-txt-2")}
        </p>
        <p>
          {t("p-2-txt-0")}
          <a href={t("p-2-a-0-href")} target="_blank" rel="noreferrer">
            {t("p-2-a-0-txt")}
          </a>
          {t("p-2-txt-1")}
        </p>
        <p>
          {t("p-3-txt-0")}
          <a href={t("p-3-a-0-href")} target="_blank" rel="noreferrer">
            {t("p-3-a-0-txt")}
          </a>
          {t("p-3-txt-1")}
        </p>
      </div>
    </div>
  );
}
