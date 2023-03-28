import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { Fragment, useEffect, useRef, useState } from "react";
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
        "flex items-center gap-0 md:gap-3 justify-center md:h-full mb-32 snap-start snap-always px-8")
      }
    >
      <div
        ref={skillDiv}
        className="grid grid-cols-4 md:grid-cols-[5] gap-1 md:gap-2 md:-ml-8"
      >
        {skillData.map((entry) => {
          const SkillEle = (
            <SkillCircle
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
          );
          return (
            <Fragment key={entry.skill}>
              <a
                href={entry.url}
                target="_blank"
                rel="noreferrer"
                className="md:hidden inline-block"
              >
                {SkillEle}
              </a>
              <div className="hidden md:inline-block">{SkillEle}</div>
            </Fragment>
          );
        })}
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
            <>{t("title")}</>
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
                {t("more-info")}{" "}
                <HiExternalLink className="inline -mx-0 mb-1" />
              </a>
            </>
          ) : (
            <>{t("description")}</>
          )}
        </p>
      </div>
    </section>
  );
}
