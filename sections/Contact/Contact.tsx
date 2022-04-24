import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import footerData from "../../data/footerData";
import styles from "./Contact.module.css";

interface Props {
  onFormSubmit: Function;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function Contact({ onFormSubmit }: Props) {
  const { t } = useTranslation("contact");
  const budgets = [
    t("option-budget-0"),
    t("option-budget-1"),
    t("option-budget-2"),
    t("option-budget-3"),
  ];
  const [budget, setBudget] = useState(budgets[0]);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formElements = [...event.currentTarget.elements];
    const isNoBotSubmit =
      formElements.filter((item) => item.name === "bot-field")[0].value === "";
    const validFormElements = isNoBotSubmit ? formElements : [];
    if (validFormElements.length < 1) {
      onFormSubmit(-1);
    } else {
      const filledOutElements = validFormElements
        .filter((elem) => !!elem.value)
        .map((element) => {
          if (encodeURIComponent(element.name).includes("Budget")) {
            return (
              encodeURIComponent("Budget") + "=" + encodeURIComponent(budget)
            );
          }
          return (
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
          );
        })
        .join("&");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          onFormSubmit(1);
          event.target.reset();
        })
        .catch((_) => {
          onFormSubmit(-1);
        });
    }
  };
  return (
    <form
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      onSubmit={onSubmit}
      className={styles.contactWrapper}
    >
      <input type="hidden" name="form-name" value="contact" required />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className={styles.leftCol}>
        <div className={styles.headline}>
          <h2>
            <span dangerouslySetInnerHTML={{ __html: t("h2-0-txt-0") }} />
          </h2>
        </div>
        <label className={styles.label} htmlFor="budget">
          {t("label-budget")}
          <select
            required
            className={classNames(styles.input)}
            onChange={(e) => setBudget(e.target.value)}
            name="Budget"
            id="budget"
          >
            <option value={budgets[0]}>{budgets[0]}</option>
            <option value={budgets[1]}>{budgets[1]}</option>
            <option value={budgets[2]}>{budgets[2]}</option>
            <option value={budgets[3]}>{budgets[3]}</option>
          </select>
        </label>
        <label className={styles.label} htmlFor="name">
          {t("label-name")}
          <input
            required
            name="Name"
            id="name"
            type={"text"}
            placeholder={t("input-name-placeholder")}
            className={styles.input}
           />
        </label>
        <label className={styles.label} htmlFor="email">
          {t("label-email")}
          <input
            required
            name="E-Mail"
            id="email"
            type={"email"}
            placeholder={t("input-email-placeholder")}
            className={styles.input}
           />
        </label>
      </div>
      <div className={styles.rightCol}>
        <label className={styles.label} htmlFor="message">
          {t("label-message")}
          <textarea
            required
            name="Message"
            id="message"
            className={classNames(styles.input, styles.textArea)}
           />
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
                <span className={styles.smLinkSpace} />
                <span className={styles.smLinkText}>{smLink.text}</span>
              </a>
            );
          })}
        </div>
      </div>
    </form>
  );
}
