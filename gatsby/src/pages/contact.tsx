import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../Components/Layout";
import styled from "styled-components";

const ContactCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ContactItems = styled.ul`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: left;
  list-style-type: none;
`;

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <h2 className="title">Contact Louise</h2>
        <ContactCardStyles>
          <h2>Contact</h2>
          <ContactItems>
            <li>✉️ hello@louiseholcomb.com</li>
            <li>F facebook.com/louiseholcombyoga</li>
            <li>📷 @louiseholcombyoga</li>
          </ContactItems>
        </ContactCardStyles>
      </Layout>
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Louise Holcomb Contact Page</title>;
