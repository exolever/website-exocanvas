import React from 'react'
import { Link } from 'gatsby'

// import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'
import Index from '../components/Index'

import '../css/custom.css'
import '../css/font-awesome.min.css'
import '../css/main.css'
import '../css/noscript.css'

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  <>
    <Index />
  </>
)

export default IndexPage
