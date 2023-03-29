import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import React from "react";

interface SkillsIntroProps {
  className?: string;
}

const SkillsIntro: React.FC<SkillsIntroProps> = ({ className }) => {
  const { t } = useTranslation("common");
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <h2 className="mb-4 snap-center text-3xl font-semibold leading-tight md:text-4xl">
          <span dangerouslySetInnerHTML={{ __html: t("skills-intro") }} />
        </h2>
        <p>{t("skills-intro-p")}</p>
      </motion.div>
    </div>
  );
};

export default SkillsIntro;
