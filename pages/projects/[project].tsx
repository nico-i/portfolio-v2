import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import NavBar from "../../components/NavBar";

/** Dynamic page for rendering projects.
 *
 * @param {Object} props An object containing the parsed metadata of the project markdown file and the body of the same file as a string.
 * @return {React.ReactNode} The page contents.
 */
export default function Project({
  frontmatter,
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { theme, setTheme } = useTheme();
  const titleArr = frontmatter.title.split(" ");
  const highlighted = titleArr.slice(-1);
  const title = titleArr.slice(0, -1).join(" ");
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
      <div className="flex justify-center">
        <div className="grid grid-cols-1 px-8 md:px-14 w-full lg:w-[60rem]">
          <div className="drop-shadow-xl mt-28 w-full mx-auto">
            <Image
              src={frontmatter.headerImg.split("/").slice(-2).join("/")}
              alt={frontmatter.headerImageAlt}
              height={frontmatter.headerImgHeight}
              width={frontmatter.headerImgWidth}
              layout="responsive"
            />
          </div>
          <div className="mt-6">
            <h1 className="font-semibold text-2xl md:text-4xl mb-2">
              {`${title} `}
              <span className="highlighted">{highlighted}</span>
            </h1>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fileContent = matter(
    fs.readFileSync(
      `./content/projects/${context.locale}/${context.params?.project}.md`,
      "utf8"
    )
  );
  const frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = fs.readdirSync(`./content/projects/`);
  const paths: { params: { project: string }; locale: string }[] = [];
  locales.forEach((locale) => {
    const projects = fs.readdirSync(`./content/projects/${locale}`);
    projects.forEach((projectFileName) => {
      //  //{ params: { slug: 'post-1' }, locale: 'en-US' }
      const projectName = projectFileName.slice(
        0,
        projectFileName.indexOf(".")
      );
      paths.push({
        params: {
          project: projectName.toString(),
        },
        locale: locale,
      });
    });
  });
  return {
    paths,
    fallback: false,
  };
};
