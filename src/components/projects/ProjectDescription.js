import React from 'react'
import Typography from '../common/Typography'

const ProjectDescription = ({ description }) => {
  return (
    <Typography color="body" fontSize={4} mt={2} mb={4}>
      {description}
    </Typography>
  )
}

export default ProjectDescription
