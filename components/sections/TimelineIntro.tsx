import { motion } from "framer-motion";
import React from "react";

interface TimelineIntroProps {
  className?: string;
  title: string;
}

const TimelineIntro: React.FC<TimelineIntroProps> = ({ className, title }) => {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
      >
        <h2 className="mb-4 text-center text-3xl font-semibold leading-tight md:w-auto md:text-left md:text-5xl">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
      </motion.div>
    </div>
  );
};

export default TimelineIntro;
