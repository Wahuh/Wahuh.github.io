import React, { useEffect, useRef } from 'react'

import SEO from '../components/seo'
import { Flex, Link as RebassLink } from 'rebass'
import { Link, graphql } from 'gatsby'
import Layout from '../components/common/Layout'
import Typography from '../components/common/Typography'
import Photo from '../components/home/Photo'
import ExternalLink from '../components/common/ExternalLink'
import LinkedinIcon from '../components/common/LinkedinIcon'
import ArrowIcon from '../components/common/ArrowIcon'
import EmailIcon from '../components/common/EmailIcon'
import TechList from '../components/home/TechList'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Flex
        mt={{ default: '75px', sm: 0 }}
        sx={{
          right: '58%',
          top: '50%',
          position: 'absolute',
          transform: 'translate(0, -50%)',
        }}
        width={{ default: '100%', sm: '240px' }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Photo
          fixed={data.file.childImageSharp.fixed}
          alt="A photo of Thanh Doan"
        />
        <Typography color="primary" fontWeight={600} as="h1" fontSize={9}>
          Thanh Doan
        </Typography>

        <Typography
          textAlign="center"
          as="h2"
          fontSize={8}
          color="secondary"
          fontWeight={500}
        >
          Aspiring Developer
        </Typography>

        <Typography
          textAlign="center"
          as="h3"
          fontSize={6}
          color="tertiary"
          fontWeight={400}
          mb={2}
        >
          Manchester
        </Typography>

        <Flex alignItems="center">
          <ExternalLink
            href="mailto: tmdoan98@gmail.com"
            sx={{ svg: { fill: 'accent', height: '1.5rem', width: '1.5rem' } }}
          >
            <LinkedinIcon />
          </ExternalLink>

          <ExternalLink
            href="mailto: tmdoan98@gmail.com"
            sx={{
              marginLeft: 1,
              svg: { fill: 'accent', height: '1.5rem', width: '1.5rem' },
            }}
          >
            <EmailIcon />
          </ExternalLink>
        </Flex>
        {/* 

        <Typography
          textAlign="center"
          as="h3"
          fontSize={{ default: 8, md: 9 }}
          color="tertiary"
          fontWeight={400}
          letterSpacing="0.05em"
          mb={3}
        >
          Manchester
        </Typography>

        <RotatingText />
         <Email /> */}
      </Flex>

      <Flex
        flexDirection="column"
        sx={{ position: 'absolute', left: '50%', top: '50%' }}
      >
        <TechList />
        <RebassLink
          mt={2}
          color="primary"
          fontSize={7}
          fontWeight={500}
          to="/portfolio"
          as={Link}
          sx={{
            textDecoration: 'none',
            svg: {
              fill: 'accent',
              size: '1.5rem',
            },
          }}
        >
          View my Portfolio <ArrowIcon />
        </RebassLink>
      </Flex>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "thanh.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
