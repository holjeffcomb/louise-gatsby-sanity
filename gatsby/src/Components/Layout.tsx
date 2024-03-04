import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "../globalStyles";
import styled from "styled-components";

const LayoutColumnStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MainStyles = styled.main`
  flex-grow: 1;
  width: 100%;
  margin: auto;
`;

interface LayoutProps {
  children: React.ReactNode;
  // Add other props here
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <LayoutColumnStyles>
        <Header />
        <MainStyles>{children}</MainStyles>
        <Footer />
      </LayoutColumnStyles>
    </>
  );
};

export default Layout;
