import type { NextPage } from "next";
import React from "react";
import { useInView } from "react-intersection-observer";
import TypreWriter from "typewriter-effect";
import NavBar from "../components/NavBar/NavBar";
import SkillCircle from "../components/SkillCircle/SkillCircle";
import Skills from "../data/Skills";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <>
      <NavBar />
      <main className={styles.sectionsWrapper}>
        <section className={styles.section} style={{ justifyContent: "start" }}>
          <h1 className={styles.typedHero}>
            <TypreWriter
              options={{
                strings: [
                  "Hi.",
                  'Mein Name ist<br> <span class="highlighted">Nico</span> Ismaili.',
                  'Ich bin ein<br> <span class="highlighted">Full-Stack Entwickler</span><br> aus Wiesbaden,<br> Deutsch&shyland.',
                  'Willkommen zu<br> meinem <span class="highlighted">Portfolio.</span>',
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
      </main>
    </>
  );
};

export default Home;
