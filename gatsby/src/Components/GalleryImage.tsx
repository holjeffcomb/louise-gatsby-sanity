import React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface GalleryImageComponentProps {
  imageData: IGatsbyImageData; // Ideally, use the correct type from 'gatsby-plugin-image'
  description: string;
}

const ContainerStyles = styled.div`
  border: 1px solid white;
  border-radius: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 4em;
  padding-right: 4em;
  margin: auto;
  width: 80%;

  img {
    border-radius: 2em;
  }
`;

const GalleryImage: React.FC<GalleryImageComponentProps> = ({
  imageData,
  description,
}) => {
  return (
    <ContainerStyles>
      <GatsbyImage image={imageData} alt={description} />
      <p>{description}</p>
    </ContainerStyles>
  );
};

export default GalleryImage;
