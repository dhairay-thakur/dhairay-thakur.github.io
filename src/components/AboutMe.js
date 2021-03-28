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
        <h3>
          <br />
          I'm a 21 year old Engineering Student living in New Delhi, currently
          pursuing B. Tech. from Indian Institute of Technology, (BHU),
          Varanasi.
          <br />
          <br />
          Fueled by my hunger for knowledge and determination to turn
          information into action, I am a self taught developer with a strong
          inclination towards Programming and Software Development, along with
          some experience in the mobile application development space.
          <br />
          <br />
          Apart from that, I'm also a UI/UX enthusiast and love exploring UI
          effects, animations and creating intuitive and dynamic user
          experiences.
        </h3>
      </AboutSection>
    </Screen>
  );
}

const Screen = styled(motion.div)`
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.75);
  background-image: url("./img/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: #0d1821; */
  h2 {
    padding-bottom: 2rem;
  }
  @media (max-width: 800px) {
    padding: 5rem 1rem;
  }
  h2 {
    padding-bottom: 0rem;
  }
`;
const AboutSection = styled.div`
  flex: 1;
  padding: 0rem 5rem;
  align-items: center;
  justify-content: center;
  border-width: 1rem;
  border-color: white;
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-weight: lighter;
    font-size: 1.5rem;
  }
  @media (max-width: 1300px) {
    h3 {
      font-weight: lighter;
      font-size: 2rem;
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-weight: lighter;
      font-size: 1.5rem;
    }
  }
`;

export default AboutMe;
