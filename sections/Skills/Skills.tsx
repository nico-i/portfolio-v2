import React from "react";
import SkillCircle from "../../components/SkillCircle/SkillCircle";
import SkillsData from "../../data/SkillsData";
import styles from "./Skills.module.css";

interface Props {
  theme: string;
  inView: boolean;
  tailwindCfg: any;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function Skills({ tailwindCfg, theme, inView }: Props) {
  return (
    <div>
      <div className={styles.skillGrid}>
        {SkillsData.map((entry) => (
          <SkillCircle
            key={entry.skill}
            percentage={entry.percentage}
            duration={1.8}
            size={80}
            bgColor={
              theme === "dark"
                ? tailwindCfg.theme.colors["primary_dark"]
                : tailwindCfg.theme.colors["primary"]
            }
            pathColor={tailwindCfg.theme.colors["light"]}
            inView={inView}
            Icon={entry.Icon}
          />
        ))}
      </div>
    </div>
  );
}
