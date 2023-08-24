import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Project } from "../../lib/Project";

interface ProjectsProps {
  projects: Project[];
  id?: string;
  projectsHeadline: string;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  projectsHeadline,
  id = undefined,
}) => {
  // TODO: use when project descriptions exist const { locale } = useRouter();
  return (
    <motion.div
      id={id}
      className="min-h-1/4 mb-60 w-full snap-center text-center px-5 lg:px-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <h2 className="mb-6 block w-full text-4xl font-semibold leading-tight md:mb-8 md:w-auto">
        <span dangerouslySetInnerHTML={{ __html: projectsHeadline }} />
      </h2>
      <ResponsiveMasonry>
        <Masonry gutter="1.75rem">
          {projects.map((project) => (
            <Link
              href={project.projectURL} // TODO: Replace with `/${locale}/projects/${project.slug}` asa projects have descriptions
              key={project.title}
              passHref
              target="_blank" // TODO: Remove asa projects have descriptions
              rel="noopener noreferrer"
              className="shadow-lg transition-opacity duration-300 hover:opacity-90 w-full"
            >
              <Image
                src={project.headerImage.src}
                alt={project.headerImage.alt}
                height={project.headerImage.height}
                width={project.headerImage.width}
              />
            </Link>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </motion.div>
  );
};
