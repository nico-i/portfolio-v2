import classNames from "classnames";
import React from "react";
import styles from "./Contact.module.css";
import footerData from "../../data/footerData";
import { useTranslation } from "next-i18next";
/**
 *
 * @return {React.ReactNode}
 */
export default function Contact() {
  const { t } = useTranslation("contact");
  return (
    <form
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="#contact"
      name="contact"
      className={styles.contactWrapper}
    >
      <input type="hidden" name="form-name" value="contact" required={true} />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className={styles.leftCol}>
        <div className={styles.headline}>
          <h2>
            <span dangerouslySetInnerHTML={{ __html: t("h2-0-txt-0") }}></span>
          </h2>
        </div>
        <label className={styles.label} htmlFor="budget">
          {t("label-budget")}
          <select
            required={true}
            className={classNames(styles.input)}
            name="budget[]"
            id="budget"
          >
            <option>{t("option-budget-0")}</option>
            <option>{t("option-budget-1")}</option>
            <option>{t("option-budget-2")}</option>
            <option>{t("option-budget-3")}</option>
          </select>
        </label>
        <label className={styles.label} htmlFor="name">
          {t("label-name")}
          <input
            required={true}
            name="name"
            id="name"
            type={"text"}
            placeholder={t("input-name-placeholder")}
            className={styles.input}
          ></input>
        </label>
        <label className={styles.label} htmlFor="email">
          {t("label-email")}
          <input
            required={true}
            name="email"
            id="email"
            type={"email"}
            placeholder={t("input-email-placeholder")}
            className={styles.input}
          ></input>
        </label>
      </div>
      <div className={styles.rightCol}>
        <label className={styles.label} htmlFor="message">
          {t("label-message")}
          <textarea
            required={true}
            name="message"
            id="message"
            className={classNames(styles.input, styles.textArea)}
          ></textarea>
        </label>
        <div className={styles.smLinksWrapper}>
          <button type="submit" className={styles.button}>
            {t("button-send")}
          </button>
          {footerData.map((smLink, i) => {
            let orderNum = i + 1;
            if (footerData.length / 2 == i) {
              orderNum += 1;
            }
            return (
              <a
                className={styles.smLink}
                href={smLink.href}
                key={`${smLink.text}_${i}`}
                style={{ order: orderNum }}
              >
                <smLink.Icon size={25} className={styles.smLinkIcon} />
                <span className={styles.smLinkSpace}></span>
                <span className={styles.smLinkText}>{smLink.text}</span>
              </a>
            );
          })}
        </div>
      </div>
    </form>
  );
}
