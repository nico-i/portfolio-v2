import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import pbImage from "../public/images/pb.png";
import { motion } from "framer-motion";

/**
 *
 * @return {React.ReactNode}
 */
export default function About() {
  const { t } = useTranslation("about");
  return (
    <div
      className="flex h-1/2 w-full snap-center snap-normal items-center justify-center px-8"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        className="flex flex-wrap justify-center gap-8"
      >
        <div className="hidden max-w-xs items-center justify-self-center overflow-hidden rounded-full bg-primary outline outline-offset-[-1] outline-light transition-[outline-color] dark:bg-primary_dark dark:outline-dark md:flex">
          <Image alt={t("profile-img-alt")} src={pbImage} />
        </div>
        <div className="max-w-2xl justify-self-start">
          <h2 className="mb-4 text-4xl font-semibold leading-tight">
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
      </motion.div>
    </div>
  );
}
