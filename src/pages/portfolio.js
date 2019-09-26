import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import ProjectsList from '../components/projects/ProjectsList'

const PortfolioPage = ({ data }) => {
  const { projects } = data.portfolioJson
  return (
    <Layout>
      <SEO title="Home" />
      <ProjectsList projects={projects} />
    </Layout>
  )
}

export const PortfolioQuery = graphql`
  query PortfolioQuery {
    portfolioJson {
      projects {
        name
        subtitle
        description
        githubUrl
        demoUrl
        tags
      }
    }
  }
`

export default PortfolioPage
