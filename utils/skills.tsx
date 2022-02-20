import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiPostgresql,
  DiPython,
  DiTypo3,
} from "react-icons/di";
import { SiNextdotjs, SiVuedotjs, SiJava, SiWordpress, SiReact, } from "react-icons/si";

const skills = [
  {
    skill: "HTML5",
    icon: DiHtml5,
    percentage: 100,
    subtext: "",
    url: "",
  },
  {
    skill: "CSS3",
    icon: DiCss3,
    percentage: 90,
    subtext: "",
    url: "",
  },
  {
    skill: "Plain Javascript",
    icon: DiJsBadge,
    percentage: 85,
    subtext: "",
    url: "",
  },
  {
    skill: "React",
    icon: SiReact,
    percentage: 70,
    subtext: "",
    url: "",
  },
  {
    skill: "Next.js",
    icon: SiNextdotjs,
    percentage: 55,
    subtext: "",
    url: "",
  },
  {
    skill: "Vue.js",
    icon: SiVuedotjs,
    percentage: 60,
    subtext: "",
    url: "",
  },
  {
    skill: "Java",
    icon: SiJava,
    percentage: 100,
    subtext: "",
    url: "",
  },
  {
    skill: "Python",
    icon: DiPython,
    percentage: 100,
    subtext: "",
    url: "",
  },
  {
    skill: "PostgreSQL",
    icon: DiPostgresql,
    percentage: 80,
    subtext: "",
    url: "",
  },
  {
    skill: "MongoDB",
    icon: DiMongodb,
    percentage: 80,
    subtext: "",
    url: "",
  },
  {
    skill: "Typo3",
    icon: DiTypo3,
    percentage: 80,
    subtext: "",
    url: "",
  },
  {
    skill: "Wordpress",
    icon: SiWordpress,
    percentage: 100,
    subtext: "",
    url: "",
  },
].sort((a, b) => b.percentage - a.percentage);

export default skills;
