import classNames from "classnames";
import fs from "fs";
import matter from "gray-matter";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import SkillsIntro from "../components/sections/SkillsIntro";
import Timeline from "../components/sections/Timeline";
import TimelineIntro from "../components/sections/TimelineIntro";
import i18nConfig from "../next-i18next.config";
import xpItems from "./../data/xpItems.json";

interface IndexProps {
  projects: {
    [key: string]: string;
  }[];
}

const Index: React.FC<IndexProps> = ({ projects }) => {
  const [formSuccess, setFormSuccess] = useState(0);
  const { t } = useTranslation("common");

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
          "fixed left-0 right-0 top-0 z-50 overflow-hidden text-center leading-[2.5em] text-light shadow-lg transition-transform",
          { "-translate-y-14": formSuccess === 0 },
          { "translate-y-0": formSuccess === 1 || formSuccess === -1 },
          { "bg-primary dark:bg-primary_dark": formSuccess === 1 },
          { "bg-danger dark:bg-danger_dark": formSuccess === -1 }
        )}
      >
        <span>{formSuccess === 1 ? t("form-success") : t("form-error")}</span>
      </div>
      <NavBar />
      <main className="h-screen w-full snap-none overflow-scroll scroll-smooth md:snap-y">
        <Hero
          id="home"
          className="relative flex h-full w-full snap-center snap-normal items-center justify-start px-8"
        />
        <About
          id="about"
          className="flex h-full w-full snap-center snap-normal items-center justify-center px-8"
        />
        <TimelineIntro className="mb-20 flex h-4/5 w-full snap-center snap-normal items-center justify-center px-8 md:mb-0 md:h-4/6" />
        <Timeline
          id="timeline"
          className="relative mb-32 h-[175vh] overflow-hidden px-8 md:mb-48"
          items={xpItems}
        />
        <SkillsIntro className="mb-60 flex w-full items-center justify-start px-8 md:ml-28 md:mt-20 md:w-1/2 xl:w-1/4" />
        <Skills
          id="skills"
          className="mb-28 flex h-5/6 w-full snap-center items-center justify-center gap-0 px-8 md:mb-0 md:gap-6"
        />
        <Projects
          id="projects"
          projects={projects}
          className="min-h-1/4 flex w-full snap-center items-center justify-center px-8"
        />
        <Contact
          id="contact"
          className="flex h-full w-full items-center justify-center px-8"
          onFormSubmit={(newValue: number) => {
            setFormSuccess(newValue);
          }}
        />
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

export default Index;
