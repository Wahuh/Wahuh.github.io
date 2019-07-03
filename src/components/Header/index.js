import React from 'react'
import styles from './Header.module.scss'
import NavBar from '../NavBar'
import NavItem from '../NavItem'
import { Location } from '@reach/router'

const Header = () => (
  <header className={styles.Header}>
    <Location>
      {({ location }) => (
        <NavBar path={location.pathname}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </NavBar>
      )}
    </Location>
  </header>
)

export default Header
