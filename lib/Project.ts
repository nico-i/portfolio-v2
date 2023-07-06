import { Image, mapStrapiImage } from "./Image";

export interface Project {
  title: string;
  seoDescription: string;
  ogWebsiteURL: string;
  ogTitle: string;
  mdSummary: string;
  slug: string;
  headerImage: Image;
  ogImage: Image;
}

export async function getAllProjects(locale: string): Promise<Project[]> {
  const projectsRes = await fetch(
    `${process.env.STRAPI_API_URL}/projects?locale=${locale}&populate=*`
  ).then((res) => res.json());
  return projectsRes.data.map((item: any) => {
    return {
      title: item.attributes.title,
      seoDescription: item.attributes.seoDescription,
      ogWebsiteURL: item.attributes.ogWebsiteURL,
      ogTitle: item.attributes.ogTitle,
      mdSummary: item.attributes.summary,
      slug: item.attributes.slug,
      headerImage: mapStrapiImage(item.attributes.headerImage.data.attributes),
      ogImage: mapStrapiImage(item.attributes.ogImage.data.attributes),
    };
  });
}
