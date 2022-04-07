import React from "react";
import Image from "next/image";
import profileImage from "../../../public/images/pb.png";
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
          <span dangerouslySetInnerHTML={{ __html: t("heading") }}></span>
        </h2>
        <p>
          {t("p1-0")}
          <a href={t("p1-a-0-href")} target="_blank" rel="noreferrer">
            {t("p1-a-0-text")}
          </a>
          {t("p1-1")}
          <a href={t("p1-a-1-href")} target="_blank" rel="noreferrer">
            {t("p1-a-1-text")}
          </a>
          {t("p1-2")}
        </p>
        <p>
          {t("p2-0")}
          <a href={t("p2-a-0-href")} target="_blank" rel="noreferrer">
            {t("p2-a-0-text")}
          </a>
          {t("p2-1")}
        </p>
        <p>
          {t("p3-0")}
          <a href={t("p3-a-0-href")} target="_blank" rel="noreferrer">
            {t("p3-a-0-text")}
          </a>
          {t("p3-1")}
        </p>
      </div>
    </div>
  );
}
