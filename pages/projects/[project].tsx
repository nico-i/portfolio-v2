import fs from "fs";
import matter from "gray-matter";
import { useTheme } from "next-themes";
import { Params } from "next/dist/server/router";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import NavBar from "../../components/NavBar/NavBar";

interface Props {
  frontmatter: any;
  markdown: string;
}

/**
 *
 * @param {object} param
 * @return {React.ReactNode}
 */
export default function Blog({ frontmatter, markdown }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <title>Nico Ismaili | {frontmatter.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
        <meta property="og:url" content={frontmatter.ogUrl} />
        <meta property="og:title" content={frontmatter.ogTitle} />
        <meta property="og:description" content={frontmatter.ogDescription} />
        <meta property="og:image:width" content={"1080"} />
        <meta property="og:image:height" content={"1080"} />
        <meta property="og:image" content={frontmatter.ogImgUrl} />
        <meta property="og:image:alt" content={frontmatter.ogImgAlt} />
      </Head>
      <NavBar onThemeChange={setTheme} theme={theme} />
      <div className="w-full flex justify-center items-center">
        <Image
          src={frontmatter.headerImg}
          alt={frontmatter.headerImageAlt}
          height={frontmatter.headerImgHeight}
          width={frontmatter.headerImgWidth}
        />
        <h1 className="highlighted text-2xl">{frontmatter.title}</h1>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
}

/** Defines which props to fetch when prerendering the page at build time.
 *
 * @param {string} project
 * @return {Props} props
 */
export async function getStaticProps({ params }: Params) {
  const fileContent = matter(
    fs.readFileSync(`./content/projects/${params.project}.md`, "utf8")
  );
  const frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

/** Defines which paths Next.js shall prerender.
 *
 * @return {object} An object with the "paths" and "fallback" properties
 */
export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/projects");
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { project: filename } };
  });

  return {
    paths,
    fallback: false,
  };
}
