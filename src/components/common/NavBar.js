import React from 'react'
import NavItem from './NavItem'
import { Flex } from 'rebass'

const NavBar = () => {
  return (
    <Flex as="nav" alignItems="center">
      <NavItem to="/about" name="About" />
      <NavItem to="/portfolio" name="Portfolio" />
    </Flex>
  )
}

export default NavBar
