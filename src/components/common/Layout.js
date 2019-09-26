import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import Header from './Header'
import './global.css'
import 'sanitize.css'
import Name from './Name'
import HamburgerButton from './HamburgerButton'
import Navigation from './Navigation'
import NavBar from './NavBar'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Name />
        <NavBar />
        <HamburgerButton isOpen={isOpen} onClick={handleOpen} />
      </Header>
      {/* <Navigation isOpen={isOpen} /> */}
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
