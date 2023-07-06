import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { SkillType } from "../../lib/Skill";
import SkillCircle from "../SkillCircle";

interface SkillsProps {
  className?: string;
  skills: SkillType[];
  defaultTitle: string;
  defaultSubtitle: string;
  id?: string;
}

/**
 *
 * @return {React.ReactNode}
 */
const Skills: React.FC<SkillsProps> = ({
  className,
  id,
  skills,
  defaultTitle,
  defaultSubtitle,
}) => {
  const [skillDivHeight, setSkillDivHeight] = useState(0);
  const [skillDivWidth, setSkillDivWidth] = useState(0);
  const [activeSkill, setActiveSkill] = useState<SkillType | null>(null);
  const [isTransparent, setIsTransparent] = useState(false);
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

  useEffect(() => {
    if (!isInView) {
      setActiveSkill(null);
    }
  }, [isInView]);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      className={className}
    >
      <div
        ref={skillDiv}
        className="-ml-0 grid grid-cols-4 gap-1 md:-ml-10 md:grid-cols-5 md:gap-2"
      >
        {skills.map((skill: SkillType) => {
          const SkillEle = (
            <SkillCircle
              active={activeSkill === skill}
              onClick={() => {
                setIsTransparent(true);
                setTimeout(() => {
                  activeSkill === skill
                    ? setActiveSkill(null)
                    : setActiveSkill(skill);
                }, 150);
              }}
              percentage={skill.proficiencyLevel}
              duration={1.8}
              size={90}
              inView={isInView}
              svgStr={skill.svg}
            />
          );
          return (
            <Fragment key={skill.id}>
              <a
                href={skill.url}
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
      {/* Info text */}
      <div
        className={classNames(
          { "opacity-0": isTransparent },
          { "opacity-100": !isTransparent },
          "hidden flex-col items-start justify-center transition-opacity duration-[150] lg:flex"
        )}
        style={{ height: skillDivHeight, width: skillDivWidth }}
      >
        <h2
          className="mt-0 text-4xl font-semibold md:-mt-40"
          dangerouslySetInnerHTML={{
            __html: activeSkill
              ? `<span>${activeSkill.skillName}</span><span class="text-primary dark:text-primary_dark">.</span>`
              : `${defaultTitle}`,
          }}
        />
        <span>
          {activeSkill ? (
            <>
              {activeSkill.summary} <br />
              <a
                href={activeSkill.url}
                className=""
                target="_blank"
                rel="noreferrer"
              >
                {"more-info"}
                <HiExternalLink className="mx-1 mb-1 inline" />
              </a>
            </>
          ) : (
            <>{defaultSubtitle}</>
          )}
        </span>
      </div>
    </motion.div>
  );
};

export default Skills;
