import { Image, mapStrapiImage } from "./Image";

export interface AboutSectionType {
  headline: string;
  htmlText: string;
  image: Image;
}

export async function getAboutSection(
  locale: string
): Promise<AboutSectionType> {
  const aboutSectionRes = await fetch(
    `${process.env.STRAPI_API_URL}/about-section?locale=${locale}&populate=*`
  );
  const aboutSectionData = await aboutSectionRes.json();
  const aboutSection = aboutSectionData.data;
  return {
    headline: aboutSection.attributes.headline as string,
    htmlText: aboutSection.attributes.text as string,
    image: mapStrapiImage(aboutSection.attributes.portrait.data.attributes),
  };
}
