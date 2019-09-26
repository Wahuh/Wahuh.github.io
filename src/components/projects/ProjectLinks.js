import React from 'react'
import { Flex } from 'rebass'
import ExternalLink from '../common/ExternalLink'

const sx = {
  color: 'buttonText',
  borderRadius: '2rem',
  letterSpacing: '0.05em',
  fontSize: '1',
  fontWeight: 500,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
}

const ProjectLinks = ({ githubUrl, demoUrl }) => {
  return (
    <Flex
      width="100%"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      flex={{ default: 1, xl: 0 }}
    >
      <ExternalLink
        href={githubUrl}
        paddingX={3}
        paddingY={2}
        backgroundColor="black"
        width="125px"
        marginRight={3}
        sx={sx}
      >
        GITHUB
      </ExternalLink>
      <ExternalLink
        href={demoUrl}
        paddingX={3}
        paddingY={2}
        backgroundColor="#f64747"
        width="125px"
        sx={sx}
      >
        LIVE DEMO
      </ExternalLink>
    </Flex>
  )
}

export default ProjectLinks
