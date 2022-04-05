import React from "react";
import TypreWriter from "typewriter-effect";
import styles from "./Hero.module.css";
/**
 *
 * @return {React.ReactNode}
 */
export default function Hero() {
  return (
    <h1 className={styles.typedHero}>
      <TypreWriter
        aria-hidden="true"
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
      <span className={styles.a11yHero}>
        Hi, mein Name ist Nico Ismaili. Ich bin ein Full-Stack Entwickler aus
        Wiesbaden, Deutschland. Willkommen zu meinem Portfolio.
      </span>
    </h1>
  );
}
