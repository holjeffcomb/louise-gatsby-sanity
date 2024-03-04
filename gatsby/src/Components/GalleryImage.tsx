import React from "react";
import { GalleryImageProps } from "../types";
import styled from "styled-components";

const ContainerStyles = styled.div`
  border: 1px solid white;
  border-radius: 2em;
  padding-left: 4em;
  padding-right: 4em;
  margin: 2em;
`;

const Offering: React.FC<GalleryImageProps> = ({ filename, description }) => {
  return (
    <ContainerStyles>
      <h2>{filename}</h2>
      <p>{description}</p>
    </ContainerStyles>
  );
};

export default Offering;
