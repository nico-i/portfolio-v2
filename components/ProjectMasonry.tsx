import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

interface Props {
  projects: {
    [key: string]: string;
  }[];
  locale: string | undefined;
}

export const ProjectMasonry = ({ projects, locale }: Props) => {
  const { t } = useTranslation("projects");
  return (
    <div
      id="projects"
      className="min-h-1/4 flex w-full snap-center items-center justify-center px-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <h2 className="mb-8 block text-4xl font-semibold leading-tight">
          <span dangerouslySetInnerHTML={{ __html: t("h2-0-txt-0") }} />
        </h2>
        <div className="masonry sm:masonry-sm md:masonry-md">
          {projects.map((project) => (
            <Link
              href={`/${locale}/projects/${project.slug}`}
              key={project.title}
              passHref
              className="break-inside drop-shadow-xl inline-block w-96 rounded-lg drop-shadow-skill-circle transition-opacity duration-300 hover:opacity-90"
            >
              <Image
                src={`/images/${project.headerImg
                  .split("/")
                  .slice(-2)
                  .join("/")}`}
                alt={project.headerImageAlt}
                height={Number(project.headerImgHeight)}
                width={Number(project.headerImgWidth)}
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
