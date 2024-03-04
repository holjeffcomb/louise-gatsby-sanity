import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "../globalStyles";
import styled from "styled-components";

const ContainerStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const MainStyles = styled.main`
  flex-grow: 1;
  width: 30%;
  max-width: 30%;
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
      <ContainerStyles>
        <Header />
        <MainStyles>{children}</MainStyles>
        <Footer />
      </ContainerStyles>
    </>
  );
};

export default Layout;
