import classNames from "classnames";
import { useInView } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { useRef } from "react";

interface Props {
  title: string;
  description: string;
  start?: Date;
  end?: Date;
}

/**
 *
 * @return {React.ReactNode}
 */
const TimelineItem: React.FC<Props> = ({ title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-25% 0px -25% 0px",
    once: true,
  });

  const { t } = useTranslation("xp");
  return (
    <div
      ref={ref}
      className="relative flex w-full items-center justify-center gap-5 ease-in md:gap-4"
    >
      <span
        className={classNames(
          { "opacity-0": !isInView },
          { "opacity-100": isInView },
          "w-1/3 text-right text-primary transition-opacity delay-500 duration-500 dark:text-primary_dark md:w-1/5"
        )}
      >
        {t(title)}
      </span>
      <svg className="h-8 w-8 md:h-12 md:w-12" viewBox="0 0 41 41">
        {/* Outline */}
        <circle
          className="fill-light stroke-dark ease-in dark:fill-dark dark:stroke-light"
          cx="50%"
          cy="50%"
          r="18"
          strokeWidth={5}
        />
        {/* center */}
        <circle
          className={classNames(
            { "scale-0": !isInView },
            { "scale-100": isInView },
            "origin-center fill-primary transition-transform duration-300 ease-in dark:fill-primary_dark"
          )}
          cx="50%"
          cy="50%"
          r="9.5"
        />
      </svg>
      <span
        className={classNames(
          { "opacity-0": !isInView },
          { "opacity-100": isInView },
          "w-1/3 transition-opacity delay-500 duration-500 md:w-1/5"
        )}
      >
        {t(description)}
      </span>
    </div>
  );
};

export default TimelineItem;
