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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home: NextPage = () => {
  const tailwindCfg = resolveConfig(tailwindConfig);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("meta-desc")} />
        <meta property="og:title" content={t("meta-title")} />
        <meta property="og:url" content={t("meta-url")} />
        <meta property="og:description" content={t("meta-og-desc")} />
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
          <div>
            <h2>
              {t("timeline-intro-h2-0")}
              <span className="highlighted">{t("timeline-intro-h2-1-hl")}</span>
              {t("timeline-intro-h2-2")}
            </h2>
          </div>
        </FadeInSection>
        <FadeInSection style={{ justifyContent: "start" }}>
          <div className={styles.introSkills}>
            <h2>
              <span
                dangerouslySetInnerHTML={{ __html: t("skills-intro-h2-0") }}
              ></span>
              <span className="highlighted">{t("skills-intro-h2-1-hl")}</span>
              {t("skills-intro-h2-2")}
            </h2>
            <p>{t("skills-intro-p")}</p>
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

/**
 *
 * @param {string} locale
 * @return {React.ReactNode}
 */
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
