import classNames from "classnames";
import React from "react";
import styles from "./Contact.module.css";
import footerData from "../../data/footerData";
/**
 *
 * @return {React.ReactNode}
 */
export default function Contact() {
  return (
    <form className={styles.contactWrapper}>
      <div className={styles.leftCol}>
        <h2 className={styles.headline}>
          Lassen Sie uns etwas <span className="highlighted">großartiges</span>{" "}
          zusammen schaffen.
        </h2>
        <label className={styles.label}>
          Budget
          <select className={classNames(styles.input)}>
            <option>€1.000 — €1.500</option>
            <option>€2.000 — €2.500</option>
            <option>€3.000 — €3.500</option>
            <option>€3.000+</option>
          </select>
        </label>
        <label className={styles.label}>
          Vor- & Nachname
          <input
            type={"text"}
            placeholder={"John Doe"}
            className={styles.input}
          ></input>
        </label>
        <label className={styles.label}>
          E-mail Adresse
          <input
            type={"email"}
            placeholder={"name@example.com"}
            className={styles.input}
          ></input>
        </label>
      </div>
      <div className={styles.rightCol}>
        <label className={styles.label}>
          Nachricht
          <textarea
            className={classNames(styles.input, styles.textArea)}
          ></textarea>
        </label>
        <div className={styles.smLinksWrapper}>
          <button type="submit" className={styles.button}>
            Abschicken
          </button>
          {footerData.map((smLink, i) => {
            let orderNum = i + 1;
            if (footerData.length / 2 == i) {
              orderNum += 1;
            }
            console.log(orderNum);
            return (
              <a
                className={styles.smLink}
                href={smLink.href}
                key={smLink.text}
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
