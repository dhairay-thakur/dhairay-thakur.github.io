import React from "react";

import styled from "styled-components";
const Nav = (props) => {
  return (
    <StyledNav>
      <h1>
        <a href="#">
          DT
          <Dot />
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>{" "}
      </ul>
    </StyledNav>
  );
};

const Dot = styled.span`
  width: 16px;
  height: 16px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  padding-top: 0.5rem;
  margin-left: 0.5rem;
  background: #b8fb3c;
  display: inline-block;
`;

const StyledNav = styled.nav`
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10rem;
  background: black;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-right: 2rem;
    position: relative;
  }
  h1 {
    font-size: 30px;
  }
`;

export default Nav;
