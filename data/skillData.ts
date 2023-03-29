import { IconType } from "react-icons";
import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiPython,
  DiTypo3,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiVuedotjs,
  SiWordpress,
  SiTailwindcss,
  SiAtlassian,
  SiDocker,
  SiPostgresql,
  SiSpringboot,
  SiGnubash,
  SiReact,
  SiRabbitmq,
  SiAdobe,
  SiGo,
  SiCplusplus,
  SiArduino,
  SiCoursera,
} from "react-icons/si";
import { FaGitAlt, FaJava } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";

export interface SkillDataType {
  skill: string;
  Icon: IconType;
  percentage: number;
  infoTextId: string;
  url: string;
}

export const skillData: SkillDataType[] = [
  {
    skill: "HTML5",
    Icon: DiHtml5,
    percentage: 100,
    infoTextId: "html",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML",
  },
  {
    skill: "CSS-3",
    Icon: DiCss3,
    percentage: 85,
    infoTextId: "css",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    skill: "Arduino",
    Icon: SiArduino,
    percentage: 70,
    infoTextId: "arduino",
    url: "https://www.arduino.cc/",
  },
  {
    skill: "Docker",
    Icon: SiDocker,
    percentage: 50,
    infoTextId: "docker",
    url: "https://www.docker.com/",
  },
  {
    skill: "Spring Boot",
    Icon: SiSpringboot,
    percentage: 85,
    infoTextId: "spring",
    url: "https://spring.io/projects/spring-boot",
  },
  {
    skill: "Atlassian Suite",
    Icon: SiAtlassian,
    percentage: 80,
    infoTextId: "atlassian",
    url: "https://www.atlassian.com/",
  },
  {
    skill: "Bash",
    Icon: SiGnubash,
    percentage: 40,
    infoTextId: "bash",
    url: "https://www.gnu.org/software/bash/",
  },
  {
    skill: "RabbitMQ",
    Icon: SiRabbitmq,
    percentage: 25,
    infoTextId: "rabbitmq",
    url: "https://www.rabbitmq.com/",
  },
  {
    skill: "Go",
    Icon: SiGo,
    percentage: 65,
    infoTextId: "go",
    url: "https://golang.org/",
  },
  {
    skill: "C++",
    Icon: SiCplusplus,
    percentage: 40,
    infoTextId: "c++",
    url: "https://en.cppreference.com/w/cpp",
  },
  {
    skill: "Adobe Suite",
    Icon: SiAdobe,
    percentage: 75,
    infoTextId: "adobe",
    url: "https://www.adobe.com/creativecloud.html",
  },
  {
    skill: "Javascript",
    Icon: DiJsBadge,
    percentage: 85,
    infoTextId: "js",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    skill: "React",
    Icon: SiReact,
    percentage: 80,
    infoTextId: "react",
    url: "https://reactjs.org/",
  },
  {
    skill: "Tailwind CSS",
    Icon: SiTailwindcss,
    percentage: 100,
    infoTextId: "tailwind",
    url: "https://tailwindcss.com/",
  },
  {
    skill: "Next.js",
    Icon: SiNextdotjs,
    percentage: 80,
    infoTextId: "nextjs",
    url: "https://nextjs.org/",
  },
  {
    skill: "Vue.js",
    Icon: SiVuedotjs,
    percentage: 55,
    infoTextId: "vue",
    url: "https://vuejs.org/",
  },
  {
    skill: "Java",
    Icon: FaJava,
    percentage: 100,
    infoTextId: "java",
    url: "https://www.java.com/en/",
  },
  {
    skill: "C",
    Icon: SiCoursera,
    percentage: 65,
    infoTextId: "c",
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    skill: "Python",
    Icon: DiPython,
    percentage: 100,
    infoTextId: "python",
    url: "https://www.python.org/",
  },
  {
    skill: "PostgreSQL",
    Icon: SiPostgresql,
    percentage: 75,
    infoTextId: "postgresql",
    url: "https://www.postgresql.org/",
  },
  {
    skill: "SQL",
    Icon: BsFiletypeSql,
    percentage: 80,
    infoTextId: "sql",
    url: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    skill: "MongoDB",
    Icon: DiMongodb,
    percentage: 15,
    infoTextId: "mongodb",
    url: "https://www.mongodb.com/",
  },
  {
    skill: "Typo3",
    Icon: DiTypo3,
    percentage: 60,
    infoTextId: "typo3",
    url: "https://typo3.org/",
  },
  {
    skill: "Git",
    Icon: FaGitAlt,
    percentage: 75,
    infoTextId: "git",
    url: "https://git-scm.com/",
  },
  {
    skill: "Wordpress",
    Icon: SiWordpress,
    percentage: 100,
    infoTextId: "wordpress",
    url: "https://wordpress.org/",
  },
].sort((a, b) =>
  b.percentage === a.percentage
    ? a.skill.localeCompare(b.skill)
    : b.percentage - a.percentage
);
