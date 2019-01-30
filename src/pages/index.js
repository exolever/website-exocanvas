import React from 'react'

import SEO from '../components/Seo'
import IndexMain from '../components/IndexMain'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../css/custom.css'
import '../css/font-awesome.min.css'
import '../css/main.css'
import '../css/noscript.css'

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
