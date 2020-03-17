module.exports = {
  siteMetadata: {
    title: `Covid-19 info for expats in Czechia`,
    description: `All the info you wish you had if you spoke Czech`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "font-family": "Montserrat, sans-serif",
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news-pages`,
        path: `${__dirname}/src/news-pages`,
      },
    },
    `gatsby-plugin-postcss`,
    "gatsby-transformer-remark",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
