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
    }
  ]
}
