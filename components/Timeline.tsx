import React from "react";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TimelineItem from "./TimelineItem";

interface Props {
  items: Array<{
    title: string;
    description: string;
    start: number;
    end: number;
  }>;
  strokeWidth: number;
  strokeColor?: string;
  itemHeight: number | string;
  itemColor?: string;
  itemInterval: number;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function Timeline({
  items,
  strokeWidth,
  strokeColor,
  itemHeight,
  itemColor,
  itemInterval,
}: Props) {
  return (
    <div className="relative inline-block overflow-hidden">
      <span
        className="z-10 transition-all absolute h-full w-full pointer-events-none shadow-fade-tb shadow-light dark:shadow-dark"
        style={{ content: "" }}
      />
      <div
        className="w-72 h-96 md:w-[28rem]"
        style={{ scrollbarWidth: "none" }}
      >
        <Swiper
          direction={"vertical"}
          autoHeight
          spaceBetween={30}
          centeredSlides
          rewind
          autoplay={{
            delay: itemInterval,
            disableOnInteraction: false,
          }}
          a11y={{
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          }}
          modules={[A11y, Autoplay]}
        >
          {items.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex justify-items-center items-center h-96">
                <TimelineItem
                  itemHeight={itemHeight}
                  itemTitle={item.title}
                  itemDescription={item.description}
                  itemColor={itemColor}
                  strokeWidth={strokeWidth}
                  strokeColor={strokeColor}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span
        className="absolute -z-50 top-0 bottom-0 left-1/2 -translate-x-1/2 h-full"
        style={{ borderLeft: strokeColor, borderWidth: strokeWidth }}
      />
    </div>
  );
}
