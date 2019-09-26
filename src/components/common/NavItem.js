import React from 'react'
import { Flex, Link as RebassLink } from 'rebass'
import { Link } from '@reach/router'

const NavItem = ({ to, name }) => {
  return (
    <Flex as="li">
      <RebassLink
        fontSize={6}
        lineHeight={6}
        letterSpacing={6}
        mr={4}
        color="primary"
        as={Link}
        to={to}
        sx={{ textDecoration: 'none' }}
      >
        {name}
      </RebassLink>
    </Flex>
  )
}

export default NavItem
