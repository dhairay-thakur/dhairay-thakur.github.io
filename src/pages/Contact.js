// Animations
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { pageAnimation, titleAnimY, titleAnim } from "../animation";
// Data
import { social } from "../data";

const Contact = (props) => {
  return (
    <Screen
      as={motion.div}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.h1 variants={titleAnimY}>Lets Get in Touch</motion.h1>
      <hr />
      <SocialContainer>
        {social.map((s) => (
          <Social variants={titleAnimY}>
            <a href={s.link} target="_blank" rel="noreferrer">
              <motion.img
                src={`../img/${s.icon}`}
                alt={s.icon}
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 0.8,
                }}
              />
            </a>
          </Social>
        ))}
      </SocialContainer>
      <motion.p variants={titleAnim}>Dhairay Thakur ©️2021</motion.p>
    </Screen>
  );
};
const Screen = styled.div`
  min-height: 93vh;
  position: relative;
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
  h2 {
    font-size: 2rem;
  }
  p {
    position: absolute;
    bottom: 0;
    right: 2rem;
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    padding: 1rem 1rem;
  }
`;

const SocialContainer = styled(motion.div)`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Social = styled(motion.div)`
  align-items: center;
  padding: 3rem 2.5rem;
  img {
    height: 7vw;
  }
  @media (max-width: 800px) {
    padding: 1rem 2.5rem;
    img {
      height: 10vw;
    }
  }
`;
export default Contact;
