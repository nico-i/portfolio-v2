import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import NavBar from "../../components/NavBar";
import { NavLink, getNavLinks } from "../../lib/NavLinks";
import { Project as ProjectInterface, getAllProjects } from "../../lib/Project";

interface ProjectProps {
  navLinks: NavLink[];
  project: ProjectInterface;
}

/** Dynamic page for rendering projects.
 *
 * @param {Object} props An object containing the parsed metadata of the project markdown file and the body of the same file as a string.
 * @return {React.ReactNode} The page contents.
 */
export default function Project({ navLinks, project }: ProjectProps) {
  return (
    <>
      <Head>
        <title>Nico Ismaili | {project.title}</title>
        <meta name="description" content={project.seoDescription} />
        <meta property="og:url" content={project.ogImage.src} />
        <meta property="og:title" content={project.ogTitle} />
        <meta property="og:description" content={project.seoDescription} />
        <meta
          property="og:image:width"
          content={project.ogImage.width.toString()}
        />
        <meta
          property="og:image:height"
          content={project.ogImage.height.toString()}
        />
        <meta property="og:image" content={project.ogImage.src} />
        <meta property="og:image:alt" content={project.ogImage.alt} />
      </Head>
      <NavBar navLinks={navLinks} />
      <main className="flex justify-center py-20 md:py-28">
        <div className="grid w-full grid-cols-1 px-8 md:px-14 lg:w-[60rem]">
          <Image
            src={project.headerImage.src}
            alt={project.headerImage.alt}
            height={project.headerImage.height}
            width={project.headerImage.width}
            className="mx-auto w-full shadow-md"
          />
          <div className="mt-6" id="project-summary">
            <h1
              className="mb-2 text-2xl font-semibold md:text-4xl"
              dangerouslySetInnerHTML={{ __html: project.title }}
            />
            <ReactMarkdown>{project.mdSummary}</ReactMarkdown>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const projects = await getAllProjects(locale!);
  const project = projects.find((project) => project.slug === params?.slug);

  const navLinks = await getNavLinks(locale!);
  return {
    props: {
      project,
      navLinks,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: any = [];
  for (const locale of locales!) {
    const projects = await getAllProjects(locale);
    for (const project of projects) {
      paths.push({
        params: { slug: project.slug },
        locale,
      });
    }
  }
  return {
    paths,
    fallback: false,
  };
};
