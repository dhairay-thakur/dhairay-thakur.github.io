import React from "react";

import SkillSingle from "./SkillSingle";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const languages = [
  {
    title: "C/C++",
    icon: "c.png",
  },
  {
    title: "Javascript",
    icon: "javascript.png",
  },
  {
    title: "Python",
    icon: "python.png",
  },
  {
    title: "Java",
    icon: "java.png",
  },
];
const frameworks = [
  {
    title: "React/React Native",
    icon: "react.png",
  },
  {
    title: "NodeJs",
    icon: "nodejs.png",
  },
  {
    title: "Flutter",
    icon: "flutter.png",
  },
  {
    title: "Android",
    icon: "android.png",
  },
];
const databases = [
  {
    title: "MySQL",
    icon: "mysql.png",
  },
  {
    title: "MongoDB",
    icon: "mongodb.png",
  },
];
const others = [
  {
    title: "Git",
    icon: "git.png",
  },
  {
    title: "Github",
    icon: "github.png",
  },
  {
    title: "Firebase",
    icon: "firebase.png",
  },
  {
    title: "PhotoShop",
    icon: "ps.png",
  },
  {
    title: "Illustrator",
    icon: "illustrator.png",
  },
];

function Skills(props) {
  const [element, controls] = useScroll();

  return (
    <Screen ref={element} animate={controls} variants={scrollReveal}>
      <h1>Skills</h1>
      <hr />
      <SkillSingle title="Languages" skills={languages} />
      <SkillSingle title="Frameworks" skills={frameworks} />
      <SkillSingle title="Databases" skills={databases} />
      <SkillSingle title="Others" skills={others} />
    </Screen>
  );
}

const Screen = styled(motion.div)`
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  padding: 1rem 10rem;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
  }
`;

export default Skills;