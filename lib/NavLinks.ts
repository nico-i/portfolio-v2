export interface NavLink {
  href: string;
  text: string;
}

export const getNavLinks = async (locale: string): Promise<NavLink[]> => {
  const navLinksRes = await fetch(
    `${process.env.STRAPI_API_URL}/navigation?locale=${locale}&populate=*`
  ).then((res) => res.json());
  return navLinksRes.data.attributes.MenuItems;
};
