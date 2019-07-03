import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PortfolioPage = () => {
  const [s, setS] = useState(5);
  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
} 

export default PortfolioPage
