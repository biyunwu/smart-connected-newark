module.exports = {
  // pathPrefix: `/~dz220/smart_connected_newark`,
  siteMetadata: {
    title: "Smart and Connected Newark Project",
    titleTemplate: "%s · Smart and Connected Newark Project",
    description: "A National Science Foundation project. Smart city services are deeply embedded in modern cities aiming to enhance various aspects of citizens’ lives. However, underlying expected or unexpected couplings among services due to complex interactions of social and physical activities are under-explored, which lead to potential conflicts. Using City of Newark in New Jersey as a testbed, this project aims to develop ways of reducing conflicts for ensuring social inclusion and equity of city services to achieve a “harmony “ among various city services.",
    siteUrl: `https://smartcities.rutgers.edu`,
    image: "/icon.png",
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    `gatsby-plugin-remove-trailing-slashes`,
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "123",
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
    // "gatsby-plugin-mdx",
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
