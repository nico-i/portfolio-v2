import classNames from "classnames";
import React from "react";
import { useInView } from "react-intersection-observer";
import SkillCircle from "../../components/SkillCircle/SkillCircle";
import skillData from "../../data/skillData";
import styles from "./Skills.module.css";

interface Props {
  theme: string;
  tailwindCfg: any;
}

/**
 *
 * @return {React.ReactNode}
 */
export default function Skills({ tailwindCfg, theme }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <section ref={ref} className={classNames({ "fade-in-up": inView })}>
      <div className={styles.skillGrid}>
        {skillData.map((entry) => (
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
    </section>
  );
}
