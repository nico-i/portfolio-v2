import React from "react";
import Image from "next/image";
import profileImage from "../../public/images/pb.png";
import styles from "./About.module.css";

/**
 *
 * @return {React.ReactNode}
 */
export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.profilePicWrapper}>
        <Image
          priority
          alt="Profile image"
          className={styles.profilePic}
          src={profileImage}
          placeholder="blur"
        />
      </div>
      <div className={styles.aboutText}>
        <h2>
          Darf ich mich <span className="highlighted">vorstellen</span>?
        </h2>
        <p>
          Wie bereits erwähnt heiße ich Nico. Ich studiere{" "}
          <a
            href="https://www.hs-rm.de/de/fachbereiche/design-informatik-medien/studiengaenge/medieninformatik-bsc"
            target="_blank"
            rel="noreferrer"
          >
            Medieninformatik
          </a>{" "}
          im 5. Semester an der{" "}
          <a href="https://www.hs-rm.de" target="_blank" rel="noreferrer">
            Hochschule RheinMain
          </a>{" "}
          in Wiesbaden.
        </p>
        <p>
          Parallel zu meinem Studium arbeite ich als Werkstudent bei{" "}
          <a href="https://www.forsuxess.de/" target="_blank" rel="noreferrer">
            forsuxess
          </a>
          , ein Unternehmen dass sich auf HR-IT spezialisiert.
        </p>
        <p>
          In meiner Freizeit widme ich mich der{" "}
          <a
            href="https://500px.com/p/nicoismaili?view=photos"
            target="_blank"
            rel="noreferrer"
          >
            Fotografie
          </a>{" "}
          oder halte mich auf dem Laufenden was die neueste Technik angeht.
        </p>
      </div>
    </div>
  );
}
