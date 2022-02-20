import {
  DiCss3,
  DiHtml5,
  DiJava,
  DiJsBadge,
  DiMongodb,
  DiPostgresql,
  DiPython,
  DiReact,
  DiTypo3
} from "react-icons/di";
import { SiNextdotjs, SiVuedotjs, SiWordpress } from "react-icons/si";

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
    icon: DiReact,
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
    icon: DiJava,
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
