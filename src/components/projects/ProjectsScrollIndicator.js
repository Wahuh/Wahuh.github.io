import React from 'react'
import { Flex, Box } from 'rebass'
import Typography from '../common/Typography'

const ProjectsScrollIndicator = ({ projects, currentProject }) => {
  return (
    <Flex
      as="nav"
      flexDirection="column"
      alignItems="center"
      padding={0}
      width="1.9rem"
      sx={{ position: 'fixed', right: 0, top: '50%' }}
    >
      {projects.map(({ name }, i) => (
        <Flex key={name} padding={1} as="li">
          <Box
            size="0.75rem"
            sx={{
              borderRadius: '50%',
              transform: currentProject === name ? 'scale(1)' : 'scale(.666)',
              opacity: currentProject === name ? 1 : 0.5,
              transition:
                'opacity 500ms ease-out, background-color 500ms ease-out, transform 500ms ease-out',
            }}
            backgroundColor="text"
          />
        </Flex>
      ))}
    </Flex>
  )
}

export default ProjectsScrollIndicator
