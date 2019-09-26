import React from 'react'
import Typography from '../common/Typography'

const ProjectSubtitle = ({ subtitle }) => {
  return (
    <Typography
      as="h3"
      fontWeight={400}
      fontSize={{ default: 6, xl: 8 }}
      color="text"
      textAlign="center"
      mb={3}
    >
      {subtitle}
    </Typography>
  )
}

export default ProjectSubtitle
