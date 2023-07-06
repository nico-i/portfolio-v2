export interface SkillType {
  id: string;
  skillName: string;
  svg: string;
  proficiencyLevel: number;
  url: string;
  summary: string;
}

export async function getAllSkills(locale: string): Promise<SkillType[]> {
  const skillsRes = await fetch(
    `${process.env.STRAPI_API_URL}/skills?locale=${locale}`
  );
  const skillsData = await skillsRes.json();
  return skillsData.data
    .map((item: any) => {
      return {
        id: item.id,
        skillName: item.attributes.skillName,
        svg: item.attributes.svg,
        proficiencyLevel: item.attributes.proficiencyLevel,
        url: item.attributes.url,
        summary: item.attributes.summary,
      };
    })
    .sort((a: SkillType, b: SkillType) =>
      b.proficiencyLevel === a.proficiencyLevel
        ? a.skillName.localeCompare(b.skillName)
        : b.proficiencyLevel - a.proficiencyLevel
    );
}
