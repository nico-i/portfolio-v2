export interface ContactSectionData {
  locale: string;
  createdAt: string;
  updatedAt: string;
  Headline: string;
  BudgetOption1: string;
  BudgetOption2: string;
  BudgetOption3: string;
  BudgetOption4: string;
  NameLabel: string;
  NamePlaceholder: string;
  EmailLabel: string;
  EmailPlaceholder: string;
  MessageLabel: string;
  MessagePlaceholder: string;
  SendButtonText: string;
  BudgetLabel: string;
}

export const getContactSectionData = async (
  locale: string
): Promise<ContactSectionData> => {
  const contactRes = await fetch(
    `${process.env.STRAPI_API_URL}/contact-section?locale=${locale}`
  ).then((res) => res.json());
  return contactRes.data.attributes as ContactSectionData;
};
