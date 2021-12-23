/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `Nothing is Not`,
        titleTemplate: `%s | A starter theme for Gatsby`,
        description: `A starter theme for Gatsby`,
        siteUrl: `https://nothingisnot.com`,
        image: `/images/color.jpg`,
        author: `David Lambert`,
        authorSite: `https://www.dalcreatives.com`,
        twitterUsername: `@dlambert888`,
        twitterURL: `https://twitter.com/`,
        linkedInURL: `https://www.linkedin.com`,
        githubURL: `https://github.com/slipperyrabbit`,
    },
    plugins: [
        `gatsby-plugin-netlify`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nothing is Not`,
                short_name: `NIN`,
                start_url: `/`,
                background_color: `#0027EC`,
                theme_color: `#0027EC`,
                display: `standalone`,
                icon: `static/favicon.ico`,
            },
        },
        `gatsby-plugin-react-helmet`,
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'ENTER YOUR GA TRACKING ID HERE',
                head: false,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contentImages`,
                path: `${__dirname}/src/content/images`,
            },
        },
    ],
}
