import React from "react";
import TimelineItem from "./TimelineItem";
interface Props {
  items: Array<{
    title: string;
    description: string;
    start: number;
    end: number;
  }>;
}

/**
 *
 * @return {React.ReactNode}
 */
const Timeline: React.FC<Props> = ({ items }) => {
  return (
    <div className="relative mb-48 h-[175vh] overflow-hidden px-8">
      <div
        className="absolute left-1/2 h-full w-[5px] -translate-x-1/2 md:w-[5px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 2%, black 10%, black 90%, transparent 98%)",
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
