export const getTypeWriterSectionData = async (locale: string) => {
  const typewriterRes = await fetch(
    `${process.env.STRAPI_API_URL}/typewriter-section?locale=${locale}`
  ).then((res) => res.json());
  return {
    screenReaderText: typewriterRes.data.attributes.ScreenReaderText,
    typeWriterLines: typewriterRes.data.attributes.TypewriterLines,
  };
};
