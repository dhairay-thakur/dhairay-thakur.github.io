import React from "react";

import styled from "styled-components";

const SkillSingle = ({ title, skills }) => {
  return (
    <View>
      <h2>{title}</h2>
      <Category>
        {skills.map((l) => {
          return (
            <Skill>
              <img src={`../img/${l.icon}`} alt={l.title} />
              <h3>{l.title}</h3>
            </Skill>
          );
        })}
      </Category>
    </View>
  );
};

const View = styled.div`
  h2 {
    font-size: 1.5rem;
    padding: 1rem;
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
`;
export default SkillSingle;
