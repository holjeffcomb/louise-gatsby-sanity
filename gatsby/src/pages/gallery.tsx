import React from "react";
import { useStaticQuery, graphql, HeadFC } from "gatsby";
import { GalleryImageProps, QueryResult } from "../types";
import Layout from "../Components/Layout";
import GalleryImage from "../Components/GalleryImage";
import styled from "styled-components";

const ImageContainerStyles = styled.div`
  width: 50%;
  margin: auto;
`;

const GalleryPage: React.FC = () => {
  const images: GalleryImageProps[] = [
    {
      filename: "louise-desert-open.jpg",
      description: "Louise on a dry lake bed",
    },
    {
      filename: "alive.jpg",
      description: "Louise leading the Alive event",
    },
    {
      filename: "charleston.jpg",
      description: "Doing a yoga pose at Mt. Charleston",
    },
    {
      filename: "danielle-louise.jpg",
      description: "Louise and Danielle McCafferty at Mt. Charleston",
    },
    {
      filename: "lake-bed-dani.jpg",
      description: "Louise and Dani",
    },
    {
      filename: "lake-bed-face.jpg",
      description: "Louise at a dry lake bed",
    },
    {
      filename: "lake-bed-side.jpg",
      description: "Louise doing a side stretch on a dry lake bed",
    },
    {
      filename: "lake-bed-1.jpg",
      description: "Louise at a dry lake bed",
    },
    {
      filename: "lake-bed-2.jpg",
      description: "Louise at a dry lake bed",
    },
    {
      filename: "lake-bed-3.jpg",
      description: "Louise at a dry lake bed",
    },
    {
      filename: "louise-desert-open.jpg",
      description: "Louise doing a yoga pose in the desert",
    },
    {
      filename: "red-rocks1.png",
      description: "Louise at Red Rock State Park",
    },
    {
      filename: "red-rocks2.png",
      description: "Louise at Red Rock State Park",
    },
    {
      filename: "red-rocks3.jpg",
      description: "Louise at Red Rock State Park",
    },
    {
      filename: "under-tree.jpeg",
      description: "Louise under a tree",
    },
    {
      filename: "vuori-event.jpeg",
      description:
        "Louise leading an event at the Vuori headquarters in Las Vegas",
    },
    // Add more images here
  ];

  const data = useStaticQuery<QueryResult>(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h2 className="title">Gallery</h2>
      <ImageContainerStyles>
        {images
          .map(({ filename, description }) => {
            const imageNode = data.allFile.nodes.find(
              (node) => node.relativePath === filename
            );
            if (!imageNode) return null; // Skip rendering if the imageNode is not found

            const imageData = imageNode.childImageSharp.gatsbyImageData;
            return (
              <GalleryImage
                key={filename} // using filename as key since it's unique
                imageData={imageData}
                description={description}
              />
            );
          })
          .filter(Boolean)}{" "}
      </ImageContainerStyles>
    </Layout>
  );
};

export default GalleryPage;

export const Head: HeadFC = () => <title>Louise Holcomb Gallery</title>;
