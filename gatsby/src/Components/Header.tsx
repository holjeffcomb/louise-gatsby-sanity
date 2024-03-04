import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const H1Styles = styled.h1`
  text-align: center;
  color: white;
`;

const NavStyles = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
`;

const NavContainer = styled.div`
  min-width: 50%;
  max-width: 70%;
  margin: auto;
`;

const Header = () => {
  return (
    <>
      <H1Styles>Louise Holcomb Yoga</H1Styles>
      <NavContainer>
        <NavStyles>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/offerings">Offerings</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </NavStyles>
      </NavContainer>
    </>
  );
};

export default Header;
