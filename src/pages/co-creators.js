import React from 'react'

import SEO from '../components/Seo'
import HeaderAlternative from '../components/HeaderAlternative'
import CoCreators from '../components/CoCreators'
import Footer from '../components/Footer'
import config from '../../site-config';

const CoCreatorsPage = () => (
  <>
    <SEO config={config} postNode={
      {
        frontmatter: {
          title: "Co-Creators | Exo Canvas"
        },
        excerpt: `A new breed of organizations called Exponential Organizations are leveraging openness, transparency and abundance in a new way. `
      }
    } />
    <HeaderAlternative />
    <CoCreators />
    <Footer />
  </>
)

export default CoCreatorsPage
