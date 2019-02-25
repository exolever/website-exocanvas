import React from 'react'

import SEO from '../components/Seo'
import HeaderAlternative from '../components/HeaderAlternative'
import HowScalable from '../components/HowScalable'
import Footer from '../components/Footer'
import config from '../../site-config';

const HowScalablePage = () => (
  <>
    <SEO config={config} postNode={
      {
        frontmatter: {
          title: "How Scalable | Exo Canvas"
        },
        excerpt: `The ExO Canvas was created by a group of ExO practitioners from around the world during a co-creation process that took a few months and was released in March 2016`
      }
    } />
    <HeaderAlternative />
    <HowScalable />
    <Footer />
  </>
)

export default HowScalablePage
