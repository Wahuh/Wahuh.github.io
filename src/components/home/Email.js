import React from 'react'
import Typography from '../common/Typography'

const Email = () => {
  return (
    <Typography
      color="link"
      paddingX={3}
      paddingY={2}
      letterSpacing="0.05em"
      sx={{ position: 'absolute', bottom: 0, right: 0, textDecoration: 'none' }}
      as="a"
      href="mailto: tmdoan98@gmail.com"
    >
      tmdoan98@gmail.com
    </Typography>
  )
}

export default Email
