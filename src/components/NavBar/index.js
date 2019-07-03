import React, { useState } from "react"
import styles from "./NavBar.module.scss"
import NavItem from "../NavItem"

const NavBar = () => {
    const [ refs, setRefs ] = useState({});


  return (
    <nav className={styles.NavBar}>
      <NavItem ref={e => setRefs({ ...refs, '/':  e })} to="/">Home</NavItem>
      <NavItem ref={e => setRefs({ ...refs, '/portfolio':  e })} to="/portfolio">Portfolio</NavItem>
      <NavItem ref={e => setRefs({ ...refs, '/contact':  e })} to="/contact">Contact</NavItem>
    </nav>
  )
}

export default NavBar
