module.exports = {
  pathPrefix: `/website-exocanvas`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://exodevhub.us20.list-manage.com/subscribe/post?u=ccfff1ccf7951d4ec0af22cac&amp;id=8ca8438865',
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: { id: "GTM-MGZKDPL" }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135475643-6",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "0",
        cookieDomain: "exocanvas.com",
      },
    },
  ]
}
