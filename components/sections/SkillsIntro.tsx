import { motion } from "framer-motion";
import React from "react";

interface SkillsIntroProps {
  className?: string;
  title: string;
  subtitle: string;
}

const SkillsIntro: React.FC<SkillsIntroProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <h2 className="mb-4 snap-center text-3xl font-semibold leading-tight md:text-4xl">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
        <span>{subtitle}</span>
      </motion.div>
    </div>
  );
};

export default SkillsIntro;
