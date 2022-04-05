import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import { useInView } from "react-intersection-observer";
import resolveConfig from "tailwindcss/resolveConfig";
import NavBar from "../components/NavBar/NavBar";
import tailwindConfig from "../tailwind.config.js";
import styles from "./index.module.css";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";

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
          <Hero />
        </section>
        <section className={styles.section} id="about">
          <About />
        </section>
        <section className={styles.section}>
          <div className={styles.queryWrapper}>
            <h2>
              Was ich in <span className="highlighted">letzter Zeit</span> so
              getrieben habe?
            </h2>
          </div>
        </section>
        <section className={styles.section} ref={ref}>
          <Skills theme={theme} tailwindCfg={tailwindCfg} inView={inView} />
        </section>
        <section className={styles.section}>
          <div className={styles.contactWrapper}>
            <h2>
              Lassen Sie uns etwas{" "}
              <span className="highlighted">großartiges</span> zusammen
              schaffen.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
