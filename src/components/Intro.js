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
          info about me which is quite long lorem ipsum dolor slit bas itn ahi
          hai a bsb sab sfsus dms sgfawsd sbdj gja{" "}
        </motion.p>
        <motion.button variants={fade}>
          <motion.h4 whileHover={{ scale: 1.2 }}>Resume</motion.h4>
        </motion.button>
        <motion.button variants={fade}>
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
