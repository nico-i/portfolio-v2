import classNames from "classnames";
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
import { getAboutSection } from "../lib/AboutSection";
import { ContactLinkType, getAllContactLinks } from "../lib/ContactLinks";
import {
  ContactSectionData,
  getContactSectionData,
} from "../lib/ContactSection";
import { GeneralData, getGeneralData } from "../lib/GeneralData";
import { Image } from "../lib/Image";
import { Project, getAllProjects } from "../lib/Project";
import { getProjectSectionData } from "../lib/ProjectSection";
import { SkillType, getAllSkills } from "../lib/Skill";
import { TimelineItemType, getAllTimelineItems } from "../lib/TimelineItem";
import { getTypeWriterSectionData } from "../lib/Typewriter";

interface IndexProps {
  skills: SkillType[];
  contactLinks: ContactLinkType[];
  projects: Project[];
  timelineItems: TimelineItemType[];
  generalAttributes: GeneralData;
  aboutText: string;
  aboutHeadline: string;
  aboutImage: Image;
  typeWriterLines: string[];
  screenReaderText: string;
  contactSectionData: ContactSectionData;
  projectsHeadline: string;
}

const Index: React.FC<IndexProps> = ({
  timelineItems,
  projects,
  skills,
  contactLinks,
  aboutText,
  projectsHeadline,
  aboutHeadline,
  generalAttributes,
  contactSectionData,
  typeWriterLines,
  screenReaderText,
  aboutImage,
}) => {
  const [formSuccess, setFormSuccess] = useState(0);

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
        <title>{generalAttributes.WebsiteTitle}</title>
        <meta name="description" content={generalAttributes.SeoDescription} />
        <meta property="og:title" content={generalAttributes.SeoTitle} />
        <meta property="og:url" content={generalAttributes.SeoUrl} />
        <meta
          property="og:description"
          content={generalAttributes.OgDescription}
        />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/ismailinico/nico.ismaili.de/main/public/images/social.jpg"
        />
        <meta property="og:image:alt" content={"meta-img-alt"} />
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
        <span>{formSuccess === 1 ? "form-success" : "form-error"}</span>
      </div>
      <NavBar />
      <main className="h-screen w-full snap-none overflow-scroll scroll-smooth px-8 md:snap-y md:snap-proximity">
        <Hero
          typeWriterLines={typeWriterLines}
          screenReaderText={screenReaderText}
          id="home"
          className="relative mb-40 flex h-screen w-full items-center justify-start "
        />
        <About
          id="about"
          className="mb-40 flex w-full snap-center items-center justify-center "
          text={aboutText}
          headline={aboutHeadline}
          imageSrc={aboutImage.src}
          imageWidth={aboutImage.width}
          imageHeight={aboutImage.height}
          imageAlt={aboutImage.alt}
        />
        <TimelineIntro
          title={generalAttributes.TimelineIntroHeadline}
          className="mb-20 flex h-4/5 w-full snap-center items-center justify-center md:mb-0 md:h-4/6"
        />
        <Timeline
          id="timeline"
          className="relative mb-32 h-[175vh] overflow-hidden md:mb-48"
          items={timelineItems}
        />
        <SkillsIntro
          title={generalAttributes.SkillsIntroHeadline}
          subtitle={generalAttributes.SkillsIntroText}
          className="mb-60 flex w-full items-center justify-start md:ml-28 md:mt-20 md:w-1/2 xl:w-1/4"
        />
        <Skills
          defaultTitle={generalAttributes.SkillsDefaultTitle}
          defaultSubtitle={generalAttributes.SkillsDefaultSubtitle}
          id="skills"
          skills={skills}
          className="mb-28 flex h-5/6 w-full snap-center items-center justify-center gap-0 md:gap-6"
        />
        <Projects
          projectsHeadline={projectsHeadline}
          id="projects"
          projects={projects}
          className="min-h-1/4 mb-60 flex w-full snap-center flex-col items-center justify-center"
        />
        <Contact
          budgetOptions={[
            contactSectionData.BudgetOption1,
            contactSectionData.BudgetOption2,
            contactSectionData.BudgetOption3,
            contactSectionData.BudgetOption4,
          ]}
          budgetLabel={contactSectionData.BudgetLabel}
          headline={contactSectionData.Headline}
          nameLabel={contactSectionData.NameLabel}
          namePlaceholder={contactSectionData.NamePlaceholder}
          emailLabel={contactSectionData.EmailLabel}
          emailPlaceholder={contactSectionData.EmailPlaceholder}
          messageLabel={contactSectionData.MessageLabel}
          messagePlaceholder={contactSectionData.MessagePlaceholder}
          sendBtnText={contactSectionData.SendButtonText}
          links={contactLinks}
          id="contact"
          className="mb-14 flex w-full snap-center items-center justify-center md:mb-96"
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
  const generalAttributes = await getGeneralData(locale);
  const {
    htmlText: aboutText,
    headline: aboutHeadline,
    image: aboutImage,
  } = await getAboutSection(locale);
  const { headline: projectsHeadline } = await getProjectSectionData(locale);
  const projects = await getAllProjects(locale);
  const skills = await getAllSkills(locale);
  const timelineItems = await getAllTimelineItems(locale);
  const contactLinks = await getAllContactLinks(locale);
  const contactSectionData = await getContactSectionData(locale);
  const { typeWriterLines, screenReaderText } = await getTypeWriterSectionData(
    locale
  );
  return {
    props: {
      projectsHeadline,
      contactSectionData,
      generalAttributes,
      typeWriterLines,
      screenReaderText,
      projects,
      skills,
      contactLinks,
      timelineItems,
      aboutText,
      aboutHeadline,
      aboutImage,
    },
  };
}

export default Index;
