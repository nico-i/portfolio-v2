import type { NextPage } from "next";
import React from "react";
import { useInView } from "react-intersection-observer";
import SkillCircle from "../components/SkillCircle/SkillCircle";
import Skills from "../data/Skills";

const Home: NextPage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div>
      <div ref={ref}>
        {Skills.map((entry) => (
          <SkillCircle
            key={entry.skill}
            percentage={entry.percentage}
            duration={1}
            size={80}
            bgColor="#007dff"
            pathColor="#f7f7f7"
            inView={inView}
            Icon={entry.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
