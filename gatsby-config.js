module.exports = {
    siteMetadata: {
        title: `Ghina Yashar`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-remark-prettier`,
            options: {
                // Look for local .prettierrc file.
                // The same as `prettier.resolveConfig(process.cwd())`
                usePrettierrc: true,
                // Overwrite prettier options, check out https://prettier.io/docs/en/options.html
                prettierOptions: {},
            },
        },
    ],
}
