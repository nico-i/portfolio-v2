import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiPostgresql,
  DiPython,
  DiTypo3,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiVuedotjs,
  SiJava,
  SiWordpress,
  SiReact,
} from "react-icons/si";

const skillData = [
  {
    skill: "HTML5",
    Icon: DiHtml5,
    percentage: 100,
    subtext: "",
    url: "",
  },
  {
    skill: "CSS3",
    Icon: DiCss3,
    percentage: 85,
    subtext: "",
    url: "",
  },
  {
    skill: "Plain Javascript",
    Icon: DiJsBadge,
    percentage: 85,
    subtext: "",
    url: "",
  },
  {
    skill: "React",
    Icon: SiReact,
    percentage: 70,
    subtext: "",
    url: "",
  },
  {
    skill: "Next.js",
    Icon: SiNextdotjs,
    percentage: 55,
    subtext: "",
    url: "",
  },
  {
    skill: "Vue.js",
    Icon: SiVuedotjs,
    percentage: 60,
    subtext: "",
    url: "",
  },
  {
    skill: "Java",
    Icon: SiJava,
    percentage: 100,
    subtext: "",
    url: "",
  },
  {
    skill: "Python",
    Icon: DiPython,
    percentage: 100,
    subtext: "",
    url: "",
  },
  {
    skill: "PostgreSQL",
    Icon: DiPostgresql,
    percentage: 80,
    subtext: "",
    url: "",
  },
  {
    skill: "MongoDB",
    Icon: DiMongodb,
    percentage: 80,
    subtext: "",
    url: "",
  },
  {
    skill: "Typo3",
    Icon: DiTypo3,
    percentage: 80,
    subtext: "",
    url: "",
  },
  {
    skill: "Wordpress",
    Icon: SiWordpress,
    percentage: 100,
    subtext: "",
    url: "",
  },
].sort((a, b) => b.percentage - a.percentage);

export default skillData;
