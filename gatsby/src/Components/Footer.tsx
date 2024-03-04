import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  font-weight: bold;
  text-align: center;
  color: white;
  padding: 2em;
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyles>
      <p>&copy; {year} Louise Holcomb Yoga. All rights reserved.</p>
    </FooterStyles>
  );
};

export default Footer;
