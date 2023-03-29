import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface ProjectsProps {
  projects: {
    [key: string]: string;
  }[];
  className?: string;
  id?: string;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  className,
  id = undefined,
}) => {
  const { t } = useTranslation("projects");
  const { locale } = useRouter();
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <h2 className="mb-6 block w-full text-4xl font-semibold leading-tight md:mb-8 md:w-auto">
        <span dangerouslySetInnerHTML={{ __html: t("h2-0-txt-0") }} />
      </h2>

      {projects.map((project) => (
        <Link
          href={`/${locale}/projects/${project.slug}`}
          key={project.title}
          passHref
          className="drop-shadow-xl inline-block drop-shadow-skill-circle transition-opacity duration-300 hover:opacity-90 md:w-96"
        >
          <Image
            src={`/images/${project.headerImg.split("/").slice(-2).join("/")}`}
            alt={project.headerImageAlt}
            height={Number(project.headerImgHeight)}
            width={Number(project.headerImgWidth)}
          />
        </Link>
      ))}
    </motion.div>
  );
};
