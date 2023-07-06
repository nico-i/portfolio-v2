import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface AboutProps {
  className?: string;
  text: string;
  headline: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  id?: string;
}

/**
 *
 * @return {React.ReactNode}
 */
const About: React.FC<AboutProps> = ({
  className,
  text,
  headline,
  imageWidth,
  imageHeight,
  imageAlt,
  imageSrc,
  id,
}) => {
  return (
    <div className={className} id={id}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        className="flex flex-wrap justify-center gap-8"
      >
        <Image
          className="w-3/5 overflow-hidden rounded-full bg-primary dark:bg-primary_dark dark:outline dark:outline-4 dark:outline-offset-[-1] dark:outline-light md:w-64"
          alt={imageAlt}
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
        />
        <div className="md:max-w-2xl">
          <h2 className="mb-4 text-4xl font-semibold leading-tight">
            <span dangerouslySetInnerHTML={{ __html: headline }} />
          </h2>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
