import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
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
  frontMatter,
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const titleArr = frontMatter.title.split(" ");
  const highlighted = titleArr.slice(-1);
  const title = titleArr.slice(0, -1).join(" ");
  return (
    <>
      <Head>
        <title>Nico Ismaili | {frontMatter.title}</title>
        <meta name="description" content={frontMatter.metaDescription} />
        <meta property="og:url" content={frontMatter.ogUrl} />
        <meta property="og:title" content={frontMatter.ogTitle} />
        <meta property="og:description" content={frontMatter.ogDescription} />
        <meta property="og:image:width" content={"1080"} />
        <meta property="og:image:height" content={"1080"} />
        <meta property="og:image" content={frontMatter.ogImgUrl} />
        <meta property="og:image:alt" content={frontMatter.ogImgAlt} />
      </Head>
      <NavBar />
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-1 px-8 md:px-14 lg:w-[60rem]">
          <div className="drop-shadow-xl mx-auto mt-28 w-full">
            <Image
              src={`/images/${frontMatter.headerImg
                .split("/")
                .slice(-2)
                .join("/")}`}
              alt={frontMatter.headerImageAlt}
              height={Number(frontMatter.headerImgHeight)}
              width={Number(frontMatter.headerImgWidth)}
            />
          </div>
          <div className="mt-6">
            <h1 className="mb-2 text-2xl font-semibold md:text-4xl">
              {`${title} `}
              <span className="text-primary dark:text-primary_dark">
                {highlighted}
              </span>
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
  const frontMatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontMatter, markdown },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = fs.readdirSync(`./content/projects/`);
  const paths: { params: { project: string }; locale: string }[] = [];
  locales.forEach((locale) => {
    const projects = fs.readdirSync(`./content/projects/${locale}`);
    projects.forEach((projectFileName) => {
      // { params: { slug: 'post-1' }, locale: 'en-US' }
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
