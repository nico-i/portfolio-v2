import classNames from "classnames";
import fs from "fs";
import matter from "gray-matter";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { ProjectMasonry } from "../components/ProjectMasonry";
import Timeline from "../components/Timeline";
import i18nConfig from "../next-i18next.config";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import FadeInSection from "../components/FadeInSection";
import xpItems from "./../data/xpItems.json";

interface Props {
  projects: {
    [key: string]: string;
  }[];
}

const Home = ({ projects }: Props) => {
  const [formSuccess, setFormSuccess] = useState(0);
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  useEffect(() => {
    if (formSuccess) {
      setTimeout(() => {
        setFormSuccess(0);
      }, 2500);
    }
  });
  return (
    <>
      <Head>
        <title>Nico Ismaili</title>
        <meta name="description" content={t("meta-desc")} />
        <meta property="og:title" content={t("meta-title")} />
        <meta property="og:url" content={t("meta-url")} />
        <meta property="og:description" content={t("meta-og-desc")} />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/ismailinico/nico.ismaili.de/main/public/images/social.jpg"
        />
        <meta property="og:image:alt" content={t("meta-img-alt")} />
      </Head>
      <div
        className={classNames(
          "fixed right-0 left-0 top-0 z-50 overflow-hidden text-center leading-[2.5em] text-light shadow-lg transition-transform",
          { "-translate-y-14": formSuccess === 0 },
          { "translate-y-0": formSuccess === 1 || formSuccess === -1 },
          { "bg-primary dark:bg-primary_dark": formSuccess === 1 },
          { "bg-danger dark:bg-danger_dark": formSuccess === -1 }
        )}
      >
        <span>{formSuccess === 1 ? t("form-success") : t("form-error")}</span>
      </div>
      <NavBar />
      <main className="h-screen w-full snap-none overflow-scroll scroll-smooth md:snap-y md:snap-mandatory">
        <FadeInSection
          id="home"
          fadeIn={false}
          className="flex h-full w-full snap-center snap-always items-center justify-start px-8"
        >
          <Hero />
        </FadeInSection>
        <FadeInSection
          id="about"
          className="flex h-full w-full snap-center snap-always items-center justify-center px-8"
        >
          <About />
        </FadeInSection>
        <FadeInSection className="flex h-full w-full snap-center snap-always items-center justify-center px-8">
          <div>
            <h2 className="mb-4 text-4xl font-semibold leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t("timeline-intro") }} />
            </h2>
          </div>
        </FadeInSection>
        <FadeInSection className="mb-32 flex w-full snap-center snap-always items-center justify-center px-8">
          <Timeline
            itemInterval={5000}
            items={xpItems}
            itemHeight={"3rem"}
            strokeWidth={4}
          />
        </FadeInSection>
        <FadeInSection className="mb-32 flex w-full snap-center snap-always items-center justify-start px-8 md:h-full">
          <div className="md:ml-28 md:mt-20 md:w-[24vw]">
            <h2 className="mb-4 text-4xl font-semibold leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t("skills-intro") }} />
            </h2>
            <p>{t("skills-intro-p")}</p>
          </div>
        </FadeInSection>
        <Skills />
        <FadeInSection
          id="projects"
          className="mb-32 flex w-full snap-center snap-always items-center justify-center px-8 md:h-full"
        >
          <div>
            <ProjectMasonry projects={projects} locale={locale} />
          </div>
        </FadeInSection>
        <FadeInSection
          id="contact"
          className="flex h-full w-full snap-center snap-always items-center justify-center px-8"
        >
          <Contact
            onFormSubmit={(newValue: number) => {
              setFormSuccess(newValue);
            }}
          />
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
export async function getStaticProps({ locale }: any) {
  const projectFiles = fs.readdirSync(`./content/projects/${locale}/`);

  // Get the front matter and slug (the filename without .md) of all files
  const projects = projectFiles.map((filename) => {
    const file = fs.readFileSync(
      `./content/projects/${locale}/${filename}`,
      "utf8"
    );
    const matterData = matter(file);
    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        [
          "common",
          "nav",
          "hero",
          "about",
          "contact",
          "xp",
          "skills",
          "projects",
        ],
        i18nConfig
      )),
      projects,
    },
  };
}

export default Home;
