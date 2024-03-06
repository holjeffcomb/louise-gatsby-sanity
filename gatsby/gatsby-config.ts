import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-louise`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Louise Holcomb Yoga",
        short_name: "Louise Holcomb",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/lotus-flower.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "taye0pn2",
        dataset: "production",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`],
        web: [
          {
            name: `Hepta Slab`,
            file: `https://fonts.googleapis.com/css2?family=Hepta+Slab&display=swap`,
          },
          {
            name: `Sacramento`,
            file: `https://fonts.googleapis.com/css2?family=Kristi&family=Sacramento&display=swap`,
          },
          {
            name: `Homemade Apple`,
            file: `https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
