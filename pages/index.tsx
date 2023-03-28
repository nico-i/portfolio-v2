import classNames from "classnames";
import { motion } from "framer-motion";
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
      <main className="h-screen w-full snap-none overflow-scroll scroll-smooth md:snap-y">
        <Hero />
        <About />
        <div className="flex h-4/6 w-full snap-center snap-normal items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
          >
            <h2 className="mb-4 text-center text-4xl font-semibold leading-tight md:text-left">
              <span dangerouslySetInnerHTML={{ __html: t("timeline-intro") }} />
            </h2>
          </motion.div>
        </div>

        <div className="flex w-full items-center justify-center px-8">
          <Timeline
            itemInterval={5000}
            items={xpItems}
            itemHeight={"3rem"}
            strokeWidth={4}
          />
        </div>

        <div className="flex h-4/6 w-full snap-center items-center justify-start px-8 md:ml-28 md:mt-20 md:w-1/2 xl:w-1/4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <h2 className="mb-4 text-4xl font-semibold leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t("skills-intro") }} />
            </h2>
            <p>{t("skills-intro-p")}</p>
          </motion.div>
        </div>
        <Skills />
        <ProjectMasonry projects={projects} locale={locale} />
        <Contact
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

export default Home;
