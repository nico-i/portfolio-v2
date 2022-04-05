import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import { useInView } from "react-intersection-observer";
import resolveConfig from "tailwindcss/resolveConfig";
import TypreWriter from "typewriter-effect";
import NavBar from "../components/NavBar/NavBar";
import SkillCircle from "../components/SkillCircle/SkillCircle";
import Skills from "../data/Skills";
import tailwindConfig from "../tailwind.config.js";
import styles from "./index.module.css";
import Image from "next/image";
import profileImage from "../public/images/pb.png";

const Home: NextPage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const tailwindCfg = resolveConfig(tailwindConfig);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <title>Nico Ismaili</title>
        <meta property="og:title" content="Portfolio von Nico Ismaili" />
        <meta name="description" content="Willkommen zu meinem Portfolio!" />
        <meta property="og:url" content="https://nico-ismaili.netlify.app/" />
        <meta
          property="og:description"
          content="Willkommen zu meinem Portfolio! Hier finden Sie meine Kontaktdaten, vergangene Projekte und Qualifikationen."
        ></meta>
      </Head>
      <NavBar onThemeChange={setTheme} theme={theme} />
      <main className={styles.sectionsWrapper}>
        <section
          id="home"
          className={styles.section}
          style={{ justifyContent: "start" }}
        >
          <h1 className={styles.typedHero}>
            <TypreWriter
              aria-hidden="true"
              options={{
                strings: [
                  "Hi.",
                  'Mein Name ist<br> <span class="highlighted">Nico</span> Ismaili.',
                  'Ich bin ein<br> <span class="highlighted">Full-Stack Entwickler</span><br> aus Wiesbaden,<br> Deutsch&shyland.',
                  'Willkommen zu<br> meinem <span class="highlighted">Portfolio.</span>',
                ],
                autoStart: true,
                loop: true,
                delay: Math.floor(Math.random() * (130 - 90 + 1)) + 90,
              }}
            />
            <span className={styles.a11yHero}>
              Hi, mein Name ist Nico Ismaili. Ich bin ein Full-Stack Entwickler
              aus Wiesbaden, Deutschland. Willkommen zu meinem Portfolio.
            </span>
          </h1>
        </section>
        <section className={styles.section} id="about">
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
                In meiner Freizeit widme ich mich der <a href="#">Fotografie</a>{" "}
                oder halte mich auf dem Laufenden was die neueste Technik
                angeht.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section} ref={ref}>
          <div>
            <div className={styles.skillGrid}>
              {Skills.map((entry) => (
                <SkillCircle
                  key={entry.skill}
                  percentage={entry.percentage}
                  duration={1.8}
                  size={80}
                  bgColor={
                    theme === "dark"
                      ? tailwindCfg.theme.colors["primary_dark"]
                      : tailwindCfg.theme.colors["primary"]
                  }
                  pathColor={tailwindCfg.theme.colors["light"]}
                  inView={inView}
                  Icon={entry.Icon}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
