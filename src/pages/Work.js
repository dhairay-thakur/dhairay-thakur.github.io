import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
// Animations
import { motion } from "framer-motion";
import { fade, pageIntro, pageIntroContainer } from "../animation";
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

const description = `
Lorem ipsum dolor sit amet, pro ex duis facer. Sea at quem hinc postea, eos duis veritus id. Te eam summo veritus detracto. Eam minim malorum explicari ea, an vel sint eros. Latine integre constituam qui ex. An velit perfecto eum, at magna nusquam splendide mei, partem assentior cu cum.
Ea duo quas audiam efficiantur, sea no probatus menandri. Id eum nullam menandri perpetua, vim at detraxit accusamus interpretaris, solet ubique duo ea. Mei ad case facer deleniti, vel dicam vituperatoribus ei. Eu impedit alienum quo, usu ne vivendo urbanitas ea est molestie argumentum referrentur.
Doctus quaeque numquam vis et, pro case falli ne, unum iracundia nam at. Laudem convenire urbanitas nam ut. Eu mel erat adhuc docendi. Ex mel vidit exerci, et diam vero has, his eu magna recteque. Liber solet graeci cu usu, aperiam integre nostrud ei usu, iusto offendit mei ea.
Brute quodsi lobortis has ei, ea mea mundi intellegat voluptatibus, ne pro accumsan comprehensam. Et harum molestie vulputate eos, percipit tincidunt pri no, vis quis eius putant eu. Odio legimus phaedrum vim te, id sed lucilius repudiandae. Ut rebum graece iuvaret pri. Ei velit tempor sea, eos id sonet cetero, melius explicari ne has.
At hinc munere epicuri nec, eu duis percipit vim, has saepe instructior ex. Ei per civibus blandit. Ad soluta dictas doctus vel. Ne docendi gubergren pertinacia per. Duo meliore quaestio no, ut has duis dictas necessitatibus.
`;
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
        <ProjectCard title="Sample Project" description={description} />
        <ProjectCard title="Sample Project" description={description} />
      </View>
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
`;

// Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 8vh;
  width: 100%;
  height: 100vh;
  background: #D8DDEF;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #EE6352;
`;
const Frame3 = styled(Frame1)`
  background: #45B69C;
`;
const Frame4 = styled(Frame1)`
  background: #FAC05E;
`;

export default Work;
