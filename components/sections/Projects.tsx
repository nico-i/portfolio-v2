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
    <div id={id} className={className}>
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
