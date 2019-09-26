import React, { useEffect, useState } from 'react'
import { Flex } from 'rebass'
import Project from './Project'
import Typography from '../common/Typography'
import ProjectsScrollIndicator from './ProjectsScrollIndicator'

const numerals = ['I', 'II', 'III', 'IV', 'V']

const ProjectsList = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState('')

  useEffect(() => {
    const options = {
      threshold: 0.8,
    }
    const items = document.querySelectorAll('ul > li')
    // setObserver(new IntersectionObserver(handleObserve, options))
    const observer = new IntersectionObserver(handleObserve, options)
    items.forEach(item => observer.observe(item))
  })

  const handleObserve = entries => {
    entries.forEach(entry => {
      const { id } = entry.target
      if (entry.isIntersecting && currentProject !== id) {
        setCurrentProject(entry.target.id)
      }
    })
  }

  return (
    <>
      <ProjectsScrollIndicator
        currentProject={currentProject}
        projects={projects}
      />
      <Flex as="ul" flexDirection="column" alignItems="center" padding={0}>
        {projects.map(project => (
          <Project
            isCurrent={currentProject === project.name}
            key={project.name}
            project={project}
          />
        ))}
      </Flex>
    </>
  )
}

export default ProjectsList
