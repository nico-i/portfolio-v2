import type { NextPage } from "next";
import React from "react";
import { useInView } from "react-intersection-observer";
import SkillCircle from "../components/SkillCircle/SkillCircle";
import Skills from "../data/Skills";
import TypreWriter from "typewriter-effect";

const Home: NextPage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div>
      <h1>
        <TypreWriter
          options={{
            strings: [
              "Hi.",
              'Mein Name ist<br/><span class="text-primary">Nico</span> Ismaili.',
              'Ich bin ein<span class="d-none d-lg-inline"> </span><br class="d-block d-lg-none"/><span class="text-primary">Full-Stack<br />Entwickler</span> aus<span class="d-none d-md-inline"> </span><br class="d-block d-md-none"/>Wiesbaden, <br /> Deutsch&shyland.',
              'Willkommen <br class="d-lg-none d-block"/>zu <br class="d-none d-lg-block"/>meinem <br class="d-lg-none d-block"/><span class="text-primary">Portfolio.</span>',
            ],
            autoStart: true,
            loop: true,
            delay: Math.floor(Math.random() * (130 - 90 + 1)) + 90,
          }}
        />
      </h1>
      <div ref={ref}>
        {Skills.map((entry) => (
          <SkillCircle
            key={entry.skill}
            percentage={entry.percentage}
            duration={1.8}
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
