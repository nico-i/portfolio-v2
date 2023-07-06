export interface ProjectSectionData {
  headline: string;
}

export const getProjectSectionData = async (
  locale: string
): Promise<ProjectSectionData> => {
  const projectRes = await fetch(
    `${process.env.STRAPI_API_URL}/projects-section?locale=${locale}`
  ).then((res) => res.json());
  return {
    headline: projectRes?.data?.attributes?.Headline,
  };
};
