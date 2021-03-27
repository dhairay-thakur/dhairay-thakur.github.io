import React from "react";

import styled from "styled-components";
import { photoAnim } from "../animation";
import { motion } from "framer-motion";

const SkillSingle = ({ title, description, img, link }) => {
  return (
    <View>
      <motion.img variants={photoAnim} src="./logo192.png" alt="" />
      <h2>{title}</h2>
      <h3>{description}</h3>
    </View>
  );
};

const View = styled.div`
  border: white solid 1px;
  width: 30vw;
  margin: 1rem;
  img {
    max-width: 30vw;
    padding: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: lighter;
  }
  h3 {
    font-weight: normal;
    font-size: 1rem;
    padding: 1rem;
  }
`;

export default SkillSingle;
