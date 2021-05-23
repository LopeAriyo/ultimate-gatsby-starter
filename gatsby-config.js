const path = require(`path`);
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const { theme } = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `The Ultimate Gatsby Starter`,
    description: `A bare-bones typescript starter for Gatsby using Tailwind, Styled Components & Twin.Macros`,
    author: `Lopè Ariyo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'content', 'blog'),
        name: `blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-ultimate-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#663399',
        theme_color: '#663399',
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
  ],
};
