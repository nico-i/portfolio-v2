export interface GeneralData {
  SeoTitle: string;
  SeoDescription: string;
  SeoUrl: string;
  OgDescription: string;
  FormSentSuccessMessage: string;
  FormSentFailureMessage: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  TimelineIntroHeadline: string;
  SkillsIntroHeadline: string;
  SkillsIntroText: string;
  SkillsDefaultTitle: string;
  SkillsDefaultSubtitle: string;
  WebsiteTitle: string;
}

export const getGeneralData = async (locale: string) => {
  const generalRes = await fetch(
    `${process.env.STRAPI_API_URL}/general?locale=${locale}`
  ).then((res) => res.json());

  return generalRes.data.attributes as GeneralData;
};
