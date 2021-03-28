import React from "react";

import SkillSingle from "./SkillSingle";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

// Data
import { languages, frameworks, others, databases } from "../data";

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
