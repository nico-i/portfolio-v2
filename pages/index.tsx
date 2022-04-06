import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import NavBar from "../components/NavBar/NavBar";
import About from "../sections/About/About";
import Contact from "../sections/Contact/Contact";
import Hero from "../sections/Hero/Hero";
import Skills from "../sections/Skills/Skills";
import tailwindConfig from "../tailwind.config.js";
import FadeInSection from "../utils/FadeInSection";
import styles from "./index.module.css";

const Home: NextPage = () => {
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
        <section id="home" style={{ justifyContent: "start" }}>
          <Hero />
        </section>
        <FadeInSection id="about">
          <About />
        </FadeInSection>
        <FadeInSection>
          <div className={styles.queryWrapper}>
            <h2>
              Was ich in <span className="highlighted">letzter Zeit</span> so
              getrieben habe?
            </h2>
          </div>
        </FadeInSection>
        <FadeInSection style={{ justifyContent: "start" }}>
          <div className={styles.introSkills}>
            <h2>
              Ich habe auch<br/><span className="highlighted">etwas Zeit</span> in
              mich gesteckt.
            </h2>
            <p>
              Und dabei vor allem mein Wissens über neue Technologien und
              Anwendungen auf Vordermann gebracht.
            </p>
          </div>
        </FadeInSection>
        <Skills theme={theme} tailwindCfg={tailwindCfg} />
        <FadeInSection id="contact">
          <Contact />
        </FadeInSection>
      </main>
    </>
  );
};

export default Home;
