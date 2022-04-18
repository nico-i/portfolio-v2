import React from "react";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Timeline.module.css";
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
  loop: boolean;
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
  loop,
}: Props) {
  return (
    <div className={styles.outerWrapper}>
      <span className={styles.edgeFade}></span>
      <div className={styles.innerWrapper}>
        <Swiper
          direction={"vertical"}
          autoHeight={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: itemInterval,
            disableOnInteraction: false,
          }}
          loop={loop}
          a11y={{
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          }}
          modules={[A11y, Autoplay]}
        >
          {items.map((item) => (
            <SwiperSlide key={item.title}>
              <div className={styles.slide}>
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
        className={styles.bgLine}
        style={{ borderLeft: strokeColor, borderWidth: strokeWidth }}
      ></span>
    </div>
  );
}
