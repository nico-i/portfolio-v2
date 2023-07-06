import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Project } from "../../lib/Project";

interface ProjectsProps {
  projects: Project[];
  className?: string;
  id?: string;
  projectsHeadline: string;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  className,
  projectsHeadline,
  id = undefined,
}) => {
  const { locale } = useRouter();
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <h2 className="mb-6 block w-full text-4xl font-semibold leading-tight md:mb-8 md:w-auto">
        <span dangerouslySetInnerHTML={{ __html: projectsHeadline }} />
      </h2>

      {projects.map((project) => (
        <Link
          href={`/${locale}/projects/${project.slug}`}
          key={project.title}
          passHref
          className="drop-shadow-xl inline-block drop-shadow-skill-circle transition-opacity duration-300 hover:opacity-90 md:w-96"
        >
          <Image
            src={project.headerImage.src}
            alt={project.headerImage.alt}
            height={project.headerImage.height}
            width={project.headerImage.width}
          />
        </Link>
      ))}
    </motion.div>
  );
};
