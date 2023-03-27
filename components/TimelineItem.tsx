import { useTranslation } from "next-i18next";
import React from "react";

interface Props {
  itemTitle: string;
  itemDescription: string;
  itemHeight: number | string;
  itemColor?: string;
  strokeWidth: number;
  strokeColor?: string;
}

/**
 *
 * @return {React.ReactNode}
 */
function TimelineItem({
  itemHeight,
  itemColor,
  itemTitle,
  itemDescription,
  strokeColor,
  strokeWidth,
}: Props) {
  const { t } = useTranslation("xp");
  return (
    <div className="flex flex-nowrap justify-items-center justify-center">
      <div className="w-2/5 flex justify-end text-right text-primary dark:text-primary_dark font-extrabold">
        <span
          dangerouslySetInnerHTML={{ __html: t(itemTitle) }}
          style={{ height: itemHeight }}
        />
      </div>
      <div
        className="flex transition bg-light dark:bg-dark stroke-dark dark:stroke-light self-center justify-center items-center rounded-full mx-2 md:mx-6 -my-1"
        style={{
          borderWidth: strokeWidth * 1.5,
          borderColor: strokeColor,
          height: itemHeight,
          width: itemHeight,
        }}
      >
        <div
          className="h-3/5 w-3/5 flex m-[0.1em] bg-primary dark:bg-primary_dark rounded-full"
          style={{ backgroundColor: itemColor }}
        />
      </div>
      <div className="w-2/5 flex">
        <span
          dangerouslySetInnerHTML={{ __html: t(itemDescription) }}
          style={{ height: itemHeight }}
        />
      </div>
    </div>
  );
}

export default TimelineItem;
