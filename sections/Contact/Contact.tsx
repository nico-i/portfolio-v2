import classNames from "classnames";
import React from "react";
import {
  Fa500Px,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Contact.module.css";
/**
 *
 * @return {React.ReactNode}
 */
export default function Contact() {
  return (
    <form className={styles.contactWrapper}>
      <div className={styles.leftCol}>
        <h2 className={styles.headline}>
          Lassen Sie
          <br className={styles.lgShow} /> uns
          <br className={styles.smShow} /> etwas{" "}
          <span className="highlighted">großartiges</span> zusammen schaffen.
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
        <div className={styles.smLinkWrapper}>
          <a
            className={styles.smLink}
            href="https://www.linkedin.com/in/ismailinico"
          >
            <FaLinkedin size={25} className={styles.smLinkIcon} />
            <span className={styles.smLinkText}>ismailinico</span>
          </a>
          <a className={styles.smLink} href="https://github.com/ismailinico">
            <FaGithub size={25} className={styles.smLinkIcon} />
            <span className={styles.smLinkText}>ismailinico</span>
          </a>
          <a className={styles.smLink} href="mailto:nico@ismaili.de">
            <FaEnvelope size={25} className={styles.smLinkIcon} />
            <span className={styles.smLinkText}>nico@ismaili.de</span>
          </a>
          <button type="submit" className={styles.button}>
            Abschicken
          </button>
          <a
            className={styles.smLink}
            href="https://www.youtube.com/channel/UCZmR0vqCMM1BWo-OkvX99EA"
          >
            <FaYoutube size={25} className={styles.smLinkIcon} />
            <span className={styles.smLinkText}>Nico Ismaili</span>
          </a>
          <a
            className={styles.smLink}
            href="https://www.instagram.com/nico.ismaili/"
          >
            <FaInstagram size={25} className={styles.smLinkIcon} />
            <span className={styles.smLinkText}>nico.ismaili</span>
          </a>
          <a
            className={styles.smLink}
            href="https://500px.com/p/nicoismaili?view=photos"
          >
            <Fa500Px size={25} className={styles.smLinkIcon} />
            <span className={styles.smLinkText}>nicoismaili</span>
          </a>
        </div>
      </div>
    </form>
  );
}
