import classNames from "classnames";
import React from "react";
import { useInView } from "react-intersection-observer";
import SkillCircle from "../../components/SkillCircle";
import skillData from "../../data/skillData";

/**
 *
 * @return {React.ReactNode}
 */
export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <section
      ref={ref}
      className={
        (classNames({ "animate-fade-in": inView }),
        "flex items-center justify-center w-full h-full snap-start snap-always px-8")
      }
    >
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {skillData.map((entry) => (
          <SkillCircle
            key={entry.skill}
            percentage={entry.percentage}
            duration={1.8}
            size={80}
            inView={inView}
            Icon={entry.Icon}
          />
        ))}
      </div>
    </section>
  );
}
