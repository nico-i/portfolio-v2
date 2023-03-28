import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import SkillCircle from "../components/SkillCircle";
import { skillData, SkillDataType } from "../data/skillData";
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
  const skillDiv: React.Ref<HTMLDivElement> = useRef(null);
  const isInView = useInView(skillDiv);

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
    <div
      className="flex h-5/6 w-full snap-center snap-normal items-center justify-center px-8"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        className="flex snap-start snap-always items-center justify-center gap-0 md:gap-6"
      >
        <div
          ref={skillDiv}
          className="grid grid-cols-4 gap-1 md:-ml-10 -ml-0 md:grid-cols-5 md:gap-2"
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
                inView={isInView}
                Icon={entry.Icon}
              />
            );
            return (
              <Fragment key={entry.skill}>
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center md:hidden"
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
            "hidden flex-col items-start justify-center transition-opacity duration-[150] lg:flex"
          )}
          style={{ height: skillDivHeight, width: skillDivWidth }}
        >
          <h2
            className="mt-0 text-5xl font-semibold leading-relaxed md:-mt-40"
            dangerouslySetInnerHTML={{
              __html: activeSkill
                ? `<span>${activeSkill.skill}</span><span class="text-primary dark:text-primary_dark">.</span>`
                : `${t("title")}`,
            }}
          />
          <p>
            {activeSkill ? (
              <>
                {t(activeSkill.infoTextId)} <br />
                <a
                  href={activeSkill.url}
                  className="text-primary dark:text-primary_dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("more-info")}{" "}
                  <HiExternalLink className="mb-1 mx-0 inline" />
                </a>
              </>
            ) : (
              <>{t("description")}</>
            )}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
