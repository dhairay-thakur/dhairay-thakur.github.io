import React from "react";
import styled from "styled-components";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Contact = (props) => {
  return (
    <Screen
      as={motion.div}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact</h1>
      <hr />
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
`;
export default Contact;
