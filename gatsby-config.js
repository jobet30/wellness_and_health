/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Wellness and Health`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `A site dedicated to wellness and health programs`,
    author: `@jobet1130`,
    keywords: `wellness, health, programs, education, children`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `programs`,
        path: `${__dirname}/src/data/programs/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
};
