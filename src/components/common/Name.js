import React from 'react'
import { Link as RebassLink } from 'rebass'
import { Link } from 'gatsby'
import Typography from './Typography'

const Name = () => {
  return (
    <RebassLink
      sx={{
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      paddingX={3}
      as={Link}
      to="/"
    >
      <Typography
        fontWeight={600}
        letterSpacing="0.05em"
        color="primary"
        as="h2"
        fontSize={7}
      >
        thanh{' '}
        <Typography color="accent" as="span">
          /
        </Typography>{' '}
        <Typography color="secondary" as="span">
          dev
        </Typography>
      </Typography>
    </RebassLink>
  )
}

export default Name
