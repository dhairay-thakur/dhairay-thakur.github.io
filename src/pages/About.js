import React from "react";
//components
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const About = (props) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Intro />
      <AboutMe />
      <Skills />
    </motion.div>
  );
};

export default About;
