// Animations
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { pageAnimation, titleAnimY, titleAnim } from "../animation";

const social = [
  {
    icon: "mail.png",
    link:
      "mailto:dhairaythakur.che18@iitbhu.ac.in?subject=Contacting From Portfolio&body=",
  },
  {
    link: "https://github.com/dhairay-thakur/",
    icon: "github.png",
  },
  {
    link: "https://www.linkedin.com/in/dhairay-thakur/",
    icon: "linkedin.png",
  },
  {
    link: "http://instagram.com/dhairay_thakur",
    icon: "instagram.png",
  },
  {
    link: "https://twitter.com/DhairayT",
    icon: "twitter.png",
  },
  {
    link: "https://www.facebook.com/dhairay.thakur/",
    icon: "fb.png",
  },
];

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
      <motion.p variants={titleAnim}>Dhairay Thakur ©️2020</motion.p>
    </Screen>
  );
};
const Screen = styled.div`
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
  h2 {
    font-size: 2rem;
  }
  p {
    position: absolute;
    bottom: 0;
    font-size: 1rem;
  }
`;

const SocialContainer = styled(motion.div)`
  display: flex;
`;

const Social = styled(motion.div)`
  align-items: center;
  padding: 3rem 2.5rem;
  img {
    height: 7vw;
  }
`;
export default Contact;
