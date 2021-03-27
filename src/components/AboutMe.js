import React from "react";

// styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

function AboutMe(props) {
  const [element, controls] = useScroll();
  return (
    <Screen ref={element} animate={controls} variants={scrollReveal}>
      <AboutSection>
        <h2>About Me</h2>
        <h3>dhjgdjasg vjdsadjksa djksmhksav nsnvcj scvhsa asc</h3>
        <h3>dhjgdjasg vjdsadjksa djksmhksav nsnvcj scvhsa asc</h3>
      </AboutSection>
    </Screen>
  );
}

const Screen = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #0d1821;
`;
const AboutSection = styled.div`
  flex: 1;
  padding: 0rem 5rem;
  align-items: center;
  justify-content: center;
  border-width: 1rem;
  border-color: white;
  h1 {
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-weight: lighter;
    font-size: 1.5rem;
  }
`;

export default AboutMe;
