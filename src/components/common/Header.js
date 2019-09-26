import React from 'react'
import { Flex } from 'rebass'

const Header = ({ children }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: '#171717',
        opacity: 0.9,
        zIndex: 999,
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '3.125rem',
      }}
      as="header"
    >
      {children}
    </Flex>
  )
}

export default Header
