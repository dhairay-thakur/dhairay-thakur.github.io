import React from "react";
//components
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// scroll to top
import ScrollToTop from "../components/ScrollToTop";

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
      <ScrollToTop />
    </motion.div>
  );
};

export default About;
