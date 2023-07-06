export interface TimelineItemType {
  id: string;
  position: string;
  company: string;
  responsibilities: string[];
  url: string;
  startDate: number;
  endDate: number;
}

export async function getAllTimelineItems(
  locale: string
): Promise<TimelineItemType[]> {
  // Get timeline items
  const timelineRes = await fetch(
    `${process.env.STRAPI_API_URL}/timeline-items?locale=${locale}`
  );
  const timelineData = await timelineRes.json();
  return timelineData.data
    .map((item: any) => {
      return {
        id: item.id,
        position: item.attributes.position,
        company: item.attributes.company,
        responsibilities: item.attributes.responsibilities,
        url: item.attributes.url,
        startDate: Date.parse(item.attributes.startDate),
        endDate: Date.parse(item.attributes.endDate),
      };
    })
    .sort((a: TimelineItemType, b: TimelineItemType) => {
      return a.startDate - b.startDate;
    });
}
