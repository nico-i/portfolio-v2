import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface Props {
  projects: {
    [key: string]: string;
  }[];
  locale: string | undefined;
}

export const ProjectMasonry = ({ projects, locale }: Props) => {
  const { t } = useTranslation("projects");
  return (
    <>
      <h2 className="block mb-8 font-semibold text-4xl leading-tight">
        <span dangerouslySetInnerHTML={{ __html: t("h2-0-txt-0") }} />
      </h2>
      <div className="masonry sm:masonry-sm md:masonry-md">
        {projects.map((project) => (
          <Link
            href={`/${locale}/projects/${project.slug}`}
            key={project.title}
            passHref
            className="inline-block w-96 rounded-lg break-inside drop-shadow-xl hover:opacity-90 transition-all"
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
    </>
  );
};
