import React from "react";
import TimelineItem from "../TimelineItem";
interface Props {
  items: Array<{
    title: string;
    description: string;
    start: number;
    end: number;
  }>;
  className?: string;
  id?: string;
}

/**
 *
 * @return {React.ReactNode}
 */
const Timeline: React.FC<Props> = ({ items, className, id }) => {
  return (
    <div className={className} id={id}>
      <div
        className="absolute left-1/2 h-full w-[5px] -translate-x-1/2 md:w-[5px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 2%, currentcolor 10%, currentcolor 90%, transparent 98%)",
        }}
      />
      <div className="absolute left-1/2 flex h-full w-full -translate-x-1/2 flex-col items-center justify-evenly">
        {items.map((item) => (
          <TimelineItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
