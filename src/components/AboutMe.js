import React from "react";

// styles
import styled from "styled-components";

function AboutMe(props) {
  return (
    <Screen>
      <AboutSection>
        <h2>About Me</h2>
        <h3>dhjgdjasg vjdsadjksa djksmhksav nsnvcj scvhsa asc</h3>
        <h3>dhjgdjasg vjdsadjksa djksmhksav nsnvcj scvhsa asc</h3>
      </AboutSection>
    </Screen>
  );
}

const Screen = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
const AboutSection = styled.div`
  flex: 1;
  padding: 0rem 5rem;
  align-items: center;
  justify-content: center;
  border-width: 1rem;
  border-color: white;
  h1 {
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-weight: lighter;
    font-size: 1.5rem;
  }
`;

export default AboutMe;
