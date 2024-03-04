import { IGatsbyImageData } from "gatsby-plugin-image";

export interface OfferingProps {
  name: string;
  description: string;
  difficulty: string;
}

export interface GalleryImageProps {
  filename: string;
  description: string;
}

export interface ImageNode {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface QueryResult {
  allFile: {
    nodes: ImageNode[];
  };
}
