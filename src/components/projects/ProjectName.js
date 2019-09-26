import React from 'react'
import Typography from '../common/Typography'

const ProjectName = ({ name }) => {
  return (
    <Typography
      as="h2"
      color="text"
      fontWeight={700}
      fontSize={{ default: 9, lg: 10, xl: 11 }}
    >
      {name}
    </Typography>
  )
}

export default ProjectName
