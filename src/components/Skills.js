import React from "react";

const languages = [
  {
    title: "C/C++",
    icon: "c.png",
  },
  {
    title: "Java",
    icon: "java.png",
  },
];

function Skills(props) {
  return (
    <div className="skills">
      <div className="category">
        {languages.map((l) => {
          return (
            <div classname="skill">
              <img src={`../img/${l.icon}`} alt={l.title} />
              <h3>{l.title}</h3>
            </div>
          );
        })}
      </div>
      <div className="category"></div>
      <div className="category"></div>
      <div className="category"></div>
    </div>
  );
}

export default Skills;
