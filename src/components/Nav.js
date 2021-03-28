import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
const Nav = (props) => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <motion.h1
        whileHover={{ scale: 1.2 }}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <Link to="/">
          DT
          <Dot />
        </Link>
      </motion.h1>
      <ul>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "60%" : "0%" }}
          />
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/work">Work</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "60%" : "0%" }}
          />
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "70%" : "0%" }}
          />
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
  position: sticky;
  top: 0;
  z-index: 5;
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
    cursor: pointer;
    font-size: 30px;
    color: white;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem 0rem;
    ul {
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
      font-size: 1.2rem;
    }
    h1 {
      font-size: 25px;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.1rem;
  background: #b8fb3c;
  width: 0%;
  position: absolute;
`;

export default Nav;
