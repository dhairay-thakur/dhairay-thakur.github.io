import React from "react";

// styles
import { Intro, Description, Text, Image } from "../styles";

const AboutSection = (props) => {
  return (
    <Intro>
      <Description>
        <div className="title">
          <Text>
            <h3>Hi there! My name is</h3>
          </Text>
          <Text>
            <h1>
              <span>Dhairay Thakur</span>
            </h1>
          </Text>
        </div>
        <p>
          info about me which is quite long lorem ipsum dolor slit bas itn ahi
          hai a bsb sab sfsus dms sgfawsd sbdj gja{" "}
        </p>
        <button>Resume</button>
        <button>Say Hi!</button>
      </Description>
      <Image>
        <img src="./img/dt.jpg" alt="dhairay" width={500} />
      </Image>
    </Intro>
  );
};

export default AboutSection;
