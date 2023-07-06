import React from "react";
import TypeWriter from "typewriter-effect";

interface HeroProps {
  className?: string;
  typeWriterLines: string[];
  screenReaderText: string;
  id?: string;
}

/**
 *
 * @return {React.ReactNode}
 */
const Hero: React.FC<HeroProps> = ({
  className,
  id,
  typeWriterLines,
  screenReaderText,
}) => {
  return (
    <section id={id} className={className}>
      <h1 className="snap-center text-[10vmin] font-semibold leading-tight md:px-10">
        <TypeWriter
          aria-hidden="true"
          options={{
            strings: typeWriterLines,
            autoStart: true,
            loop: true,
            delay: Math.floor(Math.random() * (130 - 90 + 1)) + 90,
          }}
        />
        <span className="sr-only">{screenReaderText}</span>
      </h1>
    </section>
  );
};
export default Hero;
