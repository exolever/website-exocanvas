import React from 'react'

import SEO from '../components/Seo'
import IndexMain from '../components/IndexMain'
import Header from '../components/Header'
import Footer from '../components/Footer'
import config from '../../site-config';

const IndexPage = () => (
  <>
    <SEO config={config} />
    <Header />
    <IndexMain />
    <Footer />
  </>
)

export default IndexPage
