import type { NextPage } from "next";
import React from "react";
import { useInView } from "react-intersection-observer";
import TypreWriter from "typewriter-effect";
import SkillCircle from "../components/SkillCircle/SkillCircle";
import Skills from "../data/Skills";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className={styles.siteWrapper}>
      <section className={styles.section} style={{ justifyContent: "start" }}>
        <h1 className={styles.typedHero}>
          <TypreWriter
            options={{
              strings: [
                "Hi.",
                'Mein Name ist <span class="text-primary">Nico</span> Ismaili.',
                'Ich bin ein <span class="text-primary">Full-Stack<br />Entwickler</span> aus Wiesbaden, Deutsch&shyland.',
                'Willkommen zu meinem <span class="text-primary">Portfolio.</span>',
              ],
              autoStart: true,
              loop: true,
              delay: Math.floor(Math.random() * (130 - 90 + 1)) + 90,
            }}
          />
        </h1>
      </section>
      <section className={styles.section} ref={ref}>
        <div>
          <div className={styles.skillGrid}>
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
      </section>
    </div>
  );
};

export default Home;
