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
    <div className="flex flex-nowrap justify-center justify-items-center">
      <div className="flex w-2/5 justify-end text-right font-extrabold text-primary dark:text-primary_dark">
        <span
          dangerouslySetInnerHTML={{ __html: t(itemTitle) }}
          style={{ height: itemHeight }}
        />
      </div>
      <div
        className="mx-2 -my-1 flex items-center justify-center self-center rounded-full bg-light stroke-dark transition dark:bg-dark dark:stroke-light md:mx-6"
        style={{
          borderWidth: strokeWidth * 1.5,
          borderColor: strokeColor,
          height: itemHeight,
          width: itemHeight,
        }}
      >
        <div
          className="m-[0.1em] flex h-3/5 w-3/5 rounded-full bg-primary dark:bg-primary_dark"
          style={{ backgroundColor: itemColor }}
        />
      </div>
      <div className="flex w-2/5">
        <span
          dangerouslySetInnerHTML={{ __html: t(itemDescription) }}
          style={{ height: itemHeight }}
        />
      </div>
    </div>
  );
}

export default TimelineItem;
