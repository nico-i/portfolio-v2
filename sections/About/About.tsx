import React from "react";
import Image from "next/image";
import profileImage from "../../public/images/pb.png";
import styles from "./About.module.css";
import { useTranslation } from "next-i18next";

/**
 *
 * @return {React.ReactNode}
 */
export default function About() {
  const { t } = useTranslation("about");
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.profilePicWrapper}>
        <Image
          priority
          alt={t("profile-img-alt")}
          className={styles.profilePic}
          src={profileImage}
          placeholder="blur"
          height={1080}
          width={1080}
        />
      </div>
      <div className={styles.aboutText}>
        <h2>
          <span dangerouslySetInnerHTML={{ __html: t("h2-0-txt-0") }}></span>
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
