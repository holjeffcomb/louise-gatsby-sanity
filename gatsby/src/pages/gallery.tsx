import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../Components/Layout";

const GalleryPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <h2 className="title">Gallery</h2>
      </Layout>
    </>
  );
};

export default GalleryPage;

export const Head: HeadFC = () => <title>About Page</title>;
