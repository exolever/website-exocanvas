import React from 'react'

import SEO from '../components/Seo'
import IndexMain from '../components/IndexMain'
import Header from '../components/Header'
import Footer from '../components/Footer'

const IndexPage = () => (
  <>
    <SEO
      title="ExO Canvas"
      keywords={[`OpenExO`, `exponential organization`, `sprint`]}
    />
    <Header />
    <IndexMain />
    <Footer />
  </>
)

export default IndexPage
