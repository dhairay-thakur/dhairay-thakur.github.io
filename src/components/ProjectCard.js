import React from "react";

import styled from "styled-components";
import { photoAnim } from "../animation";
import { motion } from "framer-motion";

const SkillSingle = ({ title, description, img, link }) => {
  return (
    <View>
      <a href={link} target="_blank" rel="noreferrer">
        <motion.img variants={photoAnim} src={`../img/${img}`} alt={title} />
        <h2>{title}</h2>
        <h3>{description}</h3>
      </a>
    </View>
  );
};

const View = styled.div`
  border: white solid 1px;
  width: 30vw;
  margin: 1rem;
  img {
    width: 30vw;
    height: 20vw;
    padding: 1rem;
    object-fit: cover;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: lighter;
    color: white;
    cursor: pointer;
  }
  h3 {
    font-weight: normal;
    font-size: 1rem;
    padding: 1rem;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    width: 80vw;
    img {
      width: 80vw;
      height: 53vw;
      padding: 1rem;
      object-fit: cover;
    }
  }
`;

export default SkillSingle;
