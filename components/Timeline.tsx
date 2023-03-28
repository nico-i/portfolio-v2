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
        className="pointer-events-none absolute z-10 h-full w-full shadow-fade-tb shadow-light transition-all dark:shadow-dark"
        style={{ content: "" }}
      />
      <div
        className="h-96 w-72 md:w-[28rem]"
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
              <div className="flex h-96 items-center justify-items-center">
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
        className="absolute top-0 bottom-0 left-1/2 -z-50 h-full -translate-x-1/2"
        style={{ borderLeft: strokeColor, borderWidth: strokeWidth }}
      />
    </div>
  );
}
