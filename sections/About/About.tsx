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
        />
      </div>
      <div className={styles.aboutText}>
        <h2>
          Darf ich mich <span className="highlighted">vorstellen?</span>
        </h2>
        <p>
          Wie bereits erwähnt heiße ich Nico. Ich studiere{" "}
          <a className="link" href="#">
            Medieninformatik
          </a>{" "}
          im 5. Semester an der{" "}
          <a className="link--underlined" href="#">
            Hochschule RheinMain
          </a>{" "}
          in Wiesbaden.
        </p>
        <p>
          Parallel zu meinem Studium arbeite ich als Werkstudent bei{" "}
          <a className="link--underlined" href="#">
            forsuxess
          </a>
          , ein Unternehmen dass sich auf HR-IT spezialisiert.
        </p>
        <p>
          In meiner Freizeit widme ich mich der <a href="#">Fotografie</a> oder
          halte mich auf dem Laufenden was die neueste Technik angeht.
        </p>
      </div>
    </div>
  );
}
