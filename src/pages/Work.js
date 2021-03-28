import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
// Data
import { projects } from "../data";
// Animations
import { motion } from "framer-motion";
import { fade, pageIntro, pageIntroContainer } from "../animation";
import ScrollToTop from "../components/ScrollToTop";
const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Work = (props) => {
  return (
    <Screen
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={pageIntroContainer} initial="hidden" animate="show">
        <Frame1 variants={pageIntro} />
        <Frame2 variants={pageIntro} />
        <Frame3 variants={pageIntro} />
        <Frame4 variants={pageIntro} />
      </motion.div>
      <motion.h1 variants={fade}>My Work</motion.h1>
      <hr />
      <View variants={fade}>
        {projects.map((p) => (
          <ProjectCard
            title={p.title}
            description={p.description}
            img={p.img}
            link={p.link}
            key={p.link}
          />
        ))}
      </View>
      <ScrollToTop />
    </Screen>
  );
};

const Screen = styled(motion.div)`
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
  }
`;

const View = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

// Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 8vh;
  width: 100%;
  height: 100vh;
  background: #d8ddef;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ee6352;
`;
const Frame3 = styled(Frame1)`
  background: #45b69c;
`;
const Frame4 = styled(Frame1)`
  background: #fac05e;
`;

export default Work;
