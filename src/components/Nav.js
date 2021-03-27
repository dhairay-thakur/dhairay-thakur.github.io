import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styled from "styled-components";
const Nav = (props) => {
  return (
    <StyledNav>
      <motion.h1 whileHover={{ scale: 1.2 }}>
        <Link to="/">
          DT
          <Dot />
        </Link>
      </motion.h1>
      <ul>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/">About</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/work">Work</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/contact">Contact</Link>
        </motion.li>
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
  background: #344966;
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
