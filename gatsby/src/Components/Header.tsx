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

  a {
    font-family: "Sacramento";
    font-size: 20px;
  }

  .nav-link {
    position: relative;
    color: white;
    text-decoration: none;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 50%;
    background-color: white;
    transition:
      width 0.3s ease,
      left 0.3s ease; /* Animation effect */
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
    left: 0;
  }
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
            <Link to="/" className="nav-link" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/offerings" className="nav-link" activeClassName="active">
              Offerings
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="nav-link" activeClassName="active">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" activeClassName="active">
              Contact
            </Link>
          </li>
        </NavStyles>
      </NavContainer>
    </>
  );
};

export default Header;
