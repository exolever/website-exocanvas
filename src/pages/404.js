import React from 'react'

import SEO from '../components/Seo'
import Footer from '../components/Footer'
import config from '../../site-config';

const NotFoundPage = () => (
  <>
    <SEO config={config} postNode={
      {
        frontmatter: {
          title: "404: Not found"
        },
        excerpt: `Whoops, this doesn't exist`
      }
    } />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Footer />
  </>
)

export default NotFoundPage
