import React from "react";
import { useStaticQuery, graphql, HeadFC } from "gatsby";
import { GalleryImageProps, QueryResult } from "../types";
import Layout from "../Components/Layout";
import GalleryImage from "../Components/GalleryImage";

const GalleryPage: React.FC = () => {
  const images: GalleryImageProps[] = [
    {
      filename: "louise-desert-open.jpg",
      description: "Louise on a dry lake bed",
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
    </Layout>
  );
};

export default GalleryPage;

export const Head: HeadFC = () => <title>Louise Holcomb Gallery</title>;
