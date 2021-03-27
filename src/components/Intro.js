import React from "react";

// styles
import { Intro, Description, Text, Image } from "../styles";

import { motion } from "framer-motion";
import { fade, photoAnim, titleAnim, container } from "../animation";
import Wave from "./Wave";

const AboutSection = (props) => {
  return (
    <Intro>
      <Description
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="title">
          <Text as={motion.div}>
            <motion.h3 variants={titleAnim}>Hi there! My name is</motion.h3>
          </Text>
          <Text as={motion.div} variants={titleAnim}>
            <motion.h1>
              <span>Dhairay Thakur</span>
            </motion.h1>
          </Text>
        </motion.div>
        <motion.p variants={titleAnim}>
          Junior Undergraduate at IIT (BHU), Varanasi <br/>
          Software Engineer to be..<br/> 
          Experienced Mobile App Developer💖
        </motion.p>
        <motion.button
          variants={fade}
          onClick={() => alert("Will Be Updated Soon")}
        >
          <motion.h4 whileHover={{ scale: 1.2 }}>Resume</motion.h4>
        </motion.button>
        <motion.button
          onClick={() =>
            window.open(
              "mailto:dhairaythakur.che18@iitbhu.ac.in?subject=Contacting From Portfolio&body="
            )
          }
          variants={fade}
        >
          <motion.h4 whileHover={{ scale: 1.2 }}>Say Hi!</motion.h4>
        </motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src="./img/dt.jpg"
          alt="dhairay"
          width={500}
        />
      </Image>
      <Wave />
    </Intro>
  );
};

export default AboutSection;
