/* eslint-disable import/first */
import dotenv from 'dotenv'
import path from 'path'

const configPath = path.resolve(`${__dirname}/../sanity/.env.${process.env.NODE_ENV || 'development'}`)
dotenv.config({
  path: configPath,
})

import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'CONFIG_NOT_SET',
        dataset: process.env.SANITY_STUDIO_API_DATASET || 'CONFIG_NOT_SET',
        token: process.env.SANITY_READ_TOKEN || 'CONFIG_NOT_SET',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}

export default config
