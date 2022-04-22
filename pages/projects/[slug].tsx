import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Head from "next/head";
import React from "react";

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
  return (
    <div>
      <Head>
        <title>Demo Blog | {frontmatter.title}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

/**
 *
 * @param {{params: { slug: string }}} params
 * @return {object}
 */
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const fileContent = matter(
    fs.readFileSync(`./content/projects/${slug}.md`, "utf8")
  );
  const frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

/**
 *
 * @return {object}
 */
export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/projects");

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}
