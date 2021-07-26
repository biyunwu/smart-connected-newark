const siteUrl = process.env.URL || `https://smartcities.rutgers.edu`

module.exports = {
  // pathPrefix: `/~dz220/smart_connected_newark`,
  siteMetadata: {
    title: "Smart and Connected Newark Project",
    titleTemplate: "%s · Smart and Connected Newark Project",
    description: "Smart and Connected Newark Project (Smart Cities) - A National Science Foundation project. Smart city services are deeply embedded in modern cities aiming to enhance various aspects of citizens’ lives. However, underlying expected or unexpected couplings among services due to complex interactions of social and physical activities are under-explored, which lead to potential conflicts. Using City of Newark in New Jersey as a testbed, this project aims to develop ways of reducing conflicts for ensuring social inclusion and equity of city services to achieve a “harmony “ among various city services.",
    siteUrl: siteUrl,
    image: "/icon.png",
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    `gatsby-plugin-remove-trailing-slashes`,
    // {
    //   resolve: 'gatsby-plugin-zopfli',
    //   options: {
    //     extensions: ['css', 'html', 'js', 'svg'],
    //     verbose: true,
    //     verbose_more: false,
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://smartcities.rutgers.edu',
    //     sitemap: 'https://smartcities.rutgers.edu/sitemap/sitemap-0.xml',
    //     env: {
    //       development: {
    //         policy: [{ userAgent: '*', disallow: ['/'] }]
    //       },
    //       production: {
    //         policy: [{ userAgent: '*', allow: '/' }]
    //       }
    //     }
    //   }
    // },
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
    // "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap",
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
                         allSitePage: { nodes: allPages },
                       }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
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
