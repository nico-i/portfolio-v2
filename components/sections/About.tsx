import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import pbImage from "../../public/images/pb.png";
import { motion } from "framer-motion";

interface AboutProps {
  className?: string;
  id?: string;
}

/**
 *
 * @return {React.ReactNode}
 */
const About: React.FC<AboutProps> = ({ className, id }) => {
  const { t } = useTranslation("about");
  return (
    <div className={className} id={id}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        className="flex flex-wrap justify-center gap-8"
      >
        <Image
          className="w-3/5 overflow-hidden rounded-full bg-primary dark:bg-primary_dark dark:outline dark:outline-4 dark:outline-offset-[-1] dark:outline-light md:w-64"
          alt={t("profile-img-alt")}
          src={pbImage}
        />
        <div className="md:max-w-2xl">
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
};

export default About;
