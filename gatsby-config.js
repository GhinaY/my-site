module.exports = {
    siteMetadata: {
        title: `Ghina Yashar`,
    },
    plugins: [
        {
            resolve: `gatsby-remark-prettier`,
            options: {
                usePrettierrc: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Ghina Yashar's Resume`,
              short_name: `GY`,
              start_url: `/`,
              background_color: `#fff`,
              theme_color: `#000`,
              display: `standalone`,
              icon: `./assets/favicon-512x512.png`
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-svg`,
        `gatsby-plugin-react-helmet`,
    ],
}
