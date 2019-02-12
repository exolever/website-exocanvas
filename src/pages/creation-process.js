import React from 'react'

import SEO from '../components/Seo'
import HeaderAlternative from '../components/HeaderAlternative'
import CreationProcess from '../components/CreationProcess'
import Footer from '../components/Footer'
import config from '../../site-config';

const CreationProcessPage = () => (
  <>
    <SEO config={config} postNode={
      {
        frontmatter: {
          title: "Creation Process | Exo Canvas"
        },
        excerpt: `The ExO Canvas was created by a group of ExO practitioners from around the world during a co-creation process that took a few months and was released in March 2016`
      }
    } />
    <HeaderAlternative />
    <CreationProcess />
    <Footer />
  </>
)

export default CreationProcessPage
