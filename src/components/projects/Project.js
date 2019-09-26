import React, { useEffect, useState, useRef } from 'react'
import { Flex } from 'rebass'
import ProjectVideo from './ProjectVideo'
import ProjectName from './ProjectName'
import ProjectSubtitle from './ProjectSubtitle'
import ProjectDescription from './ProjectDescription'
import ProjectLinks from './ProjectLinks'
//, githubUrl, demoUrl, tags

const Project = ({ project, isCurrent }) => {
  const { name, subtitle, description, githubUrl, demoUrl } = project

  return (
    <Flex
      id={name}
      as="li"
      width="100%"
      justifyContent="space-evenly"
      height="100vh"
      maxWidth={{ default: '100%', sm: '544px', xl: '100%' }}
      paddingX={{ default: 6 }}
      paddingTop={7}
      mb={5}
      flexDirection={{ default: 'column', xl: 'row' }}
      sx={{
        transition: 'all 400ms ease-out',
        opacity: isCurrent ? 1 : 0,
        transform: !isCurrent && 'translate3d(0, 20px, 0)',
      }}
    >
      <Flex
        flex={{ xl: 1 }}
        maxWidth={{ xl: '544px' }}
        mb={3}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <ProjectName name={name} />
        <ProjectSubtitle subtitle={subtitle} />
        <ProjectDescription description={description} />
        <ProjectLinks githubUrl={githubUrl} demoUrl={demoUrl} />
      </Flex>
      <Flex
        flexDirection="row"
        alignItems="center"
        flex={1}
        maxWidth={{ xl: '544px' }}
      >
        <ProjectVideo />
      </Flex>
    </Flex>
  )
}

export default Project
