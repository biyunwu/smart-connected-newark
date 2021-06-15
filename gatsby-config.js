module.exports = {
  pathPrefix: `/~dz220/deployment-test`,
  siteMetadata: {
    title: "Smart and Connected Newark Project",
    titleTemplate: "%s · Smart and Connected Newark Project",
    description: "A National Science Foundation project. Smart city services are deeply embedded in modern cities aiming to enhance various aspects of citizens’ lives. However, underlying expected or unexpected couplings among services due to complex interactions of social and physical activities are under-explored, which lead to potential conflicts. Using City of Newark in New Jersey as a testbed, this project aims to develop ways of reducing conflicts for ensuring social inclusion and equity of city services to achieve a “harmony “ among various city services.",
    siteUrl: `https://www.example.com`,
    image: "/icon.png",
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123",
      },
    },
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     // Defaults used for gatsbyImageData and StaticImage
    //     defaults: {},
    //     // Set to false to allow builds to continue on image errors
    //     failOnError: true,
    //     // deprecated options and their defaults:
    //     base64Width: 20,
    //     forceBase64Format: `webp`, // valid formats: png,jpg,webp
    //     useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
    //     stripMetadata: true,
    //     defaultQuality: 50,
    //   },
    // },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    // `gatsby-plugin-styled-components`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
