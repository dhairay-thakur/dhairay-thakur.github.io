import React from "react";

import styled from "styled-components";

import { titleAnim } from "../animation";
import { motion } from "framer-motion";

const SkillSingle = ({ title, skills }) => {
  return (
    <View variants={titleAnim}>
      <h2>{title}</h2>
      <Category>
        {skills.map((l) => {
          return (
            <Skill key={l.icon}>
              <img src={`../img/${l.icon}`} alt={l.title} />
              <h3>{l.title}</h3>
            </Skill>
          );
        })}
      </Category>
    </View>
  );
};

const View = styled(motion.div)`
  h2 {
    font-size: 1.5rem;
    padding: 1rem;
    color: wheat;
  }
`;

const Category = styled.div`
  display: flex;
`;

const Skill = styled.div`
  padding: 0rem 1.5rem;
  img {
    height: 7vh;
  }
  h3 {
    font-weight: lighter;
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    padding: 0rem 2vw;
    img {
      height: 7vw;
    }
    h3 {
      font-size: 2vw;
    }
  }
`;
export default SkillSingle;
