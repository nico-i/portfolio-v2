export interface ContactLinkType {
  id: number;
  username: string;
  url: string;
  svg: string;
}

export async function getAllContactLinks(
  locale: string
): Promise<ContactLinkType[]> {
  const contactLinksRes = await fetch(
    `${process.env.STRAPI_API_URL}/contact-links?locale=${locale}`
  ).then((res) => res.json());
  return (
    contactLinksRes?.data?.map((item: any) => {
      return {
        id: item.id,
        username: item.attributes.username,
        url: item.attributes.url,
        svg: item.attributes.svg,
      };
    }) ?? ([] as ContactLinkType[])
  );
}
