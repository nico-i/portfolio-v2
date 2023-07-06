import { Image, mapStrapiImage } from "./Image";

export interface Project {
  title: string;
  slug?: string;
  ogWebsiteURL: string;
  ogTitle: string;
  mdSummary: string;
  seoDescription: string;
  headerImage: Image;
  ogImage: Image;
  id: number;
}

export async function getAllProjects(locale: string): Promise<Project[]> {
  const projectsRes = await fetch(
    `${process.env.STRAPI_API_URL}/projects?locale=${locale}&populate=*`
  );
  const projectsData = await projectsRes.json();

  return projectsData.data.map((item: any) => {
    return {
      title: item.attributes.title,
      ogWebsiteURL: item.attributes.ogWebsiteURL,
      ogTitle: item.attributes.ogTitle,
      mdSummary: item.attributes.summary,
      seoDescription: item.attributes.seoDescription,
      headerImage: mapStrapiImage(item.attributes.headerImage.data.attributes),
      ogImage: mapStrapiImage(item.attributes.ogImage.data.attributes),
      id: item.id,
    };
  });
}
