import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import SkillCircle from "../components/SkillCircle";
import skillData from "../data/skillData";

/**
 *
 * @return {React.ReactNode}
 */
export default function Skills() {
  const [skillDivHeight, setSkillDivHeight] = useState(0);
  const [skillDivWidth, setSkillDivWidth] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const cols: number[] = [];
  for (let i = 12; i >= 3; i--) {
    if (skillData.length % i === 0) {
      cols.push(i);
    }
  }
  cols.sort((a, b) => a - b);

  const skillDiv: React.Ref<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (skillDiv.current) {
      setSkillDivHeight(skillDiv.current.offsetHeight);
      setSkillDivWidth(skillDiv.current.offsetWidth);
    }
  }, []);

  return (
    <section
      ref={ref}
      className={
        (classNames({ "animate-fade-in": inView }),
        "flex items-center gap-12 justify-center h-full snap-start snap-always px-8")
      }
    >
      <div
        ref={skillDiv}
        className={`grid grid-cols-3 gap-4`}
        style={{
          gridTemplateColumns: `repeat(${
            cols[Math.round(cols.length / 2) - 1]
          }, minmax(0, 1fr))`,
        }}
      >
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
      <div
        className="h-max bg-primary"
        style={{ height: skillDivHeight, width: skillDivWidth }}
      >
        <h2 className="font-black text-7xl mb-4 leading-tight">Skills</h2>
        <p>
          Hover over/select an icon to learn more about the programming
          languages and tools I have experience with. From Python to SQL,
          discover my technical skillset here.
        </p>
      </div>
    </section>
  );
}
