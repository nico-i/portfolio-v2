import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import SkillCircle from "../components/SkillCircle";
import { skillData, SkillDataType } from "../data/skillData";
import { HiExternalLink } from "react-icons/hi";
/**
 *
 * @return {React.ReactNode}
 */
export default function Skills() {
  const [skillDivHeight, setSkillDivHeight] = useState(0);
  const [skillDivWidth, setSkillDivWidth] = useState(0);
  const [activeSkill, setActiveSkill] = useState<SkillDataType | null>(null);
  const [isTransparent, setIsTransparent] = useState(false);
  const { t } = useTranslation("skills");

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

  useEffect(() => {
    setTimeout(() => {
      setIsTransparent(false);
    }, 150);
  }, [activeSkill]);

  return (
    <section
      ref={ref}
      id="skills"
      className={
        (classNames({ "animate-fade-in": inView }),
        "flex items-center gap-10 justify-center h-full snap-start snap-always px-8")
      }
    >
      <div
        ref={skillDiv}
        className={`grid grid-cols-3 gap-2 -ml-8`}
        style={{
          gridTemplateColumns: `repeat(${
            cols[Math.round(cols.length / 2) - 1]
          }, minmax(0, 1fr))`,
        }}
      >
        {skillData.map((entry) => (
          <SkillCircle
            key={entry.skill}
            active={activeSkill === entry}
            onClick={() => {
              setIsTransparent(true);
              setTimeout(() => {
                activeSkill === entry
                  ? setActiveSkill(null)
                  : setActiveSkill(entry);
              }, 150);
            }}
            percentage={entry.percentage}
            duration={1.8}
            size={90}
            inView={inView}
            Icon={entry.Icon}
          />
        ))}
      </div>
      <div
        className={classNames(
          { "opacity-0": isTransparent },
          { "opacity-100": !isTransparent },
          "hidden lg:flex flex-col items-start transition-opacity duration-[150] justify-top"
        )}
        style={{ height: skillDivHeight, width: skillDivWidth }}
      >
        <h2 className="font-semibold text-5xl leading-relaxed mt-8">
          {activeSkill ? (
            <>
              <span className="highlighted">{activeSkill.skill}</span>.
            </>
          ) : (
            <>
              What I can <span className="highlighted">do</span>.
            </>
          )}
        </h2>
        <p>
          {activeSkill ? (
            <>
              {t(activeSkill.infoTextId)} <br />
              <a
                href={activeSkill.url}
                className="highlighted"
                target="_blank"
                rel="noreferrer"
              >
                More information{" "}
                <HiExternalLink className="inline -mx-0 mb-1" />
              </a>
            </>
          ) : (
            <>
              Select an icon to learn more about the programming languages and
              tools I have experience with. From Python to SQL, discover my
              technical skillset here.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
