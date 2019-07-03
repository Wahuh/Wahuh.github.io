import React, { useState, useEffect, cloneElement } from 'react'
import styles from './NavBar.module.scss'
import NavIndicator from '../NavIndicator'

const NavBar = ({ children, path }) => {
  const [positions, setPositions] = useState({})
  useEffect(() => {
    setPositions(
      Object.entries(refs).reduce(
        (acc, [k, v]) => ({ ...acc, [k]: v.getBoundingClientRect() }),
        {}
      )
    )
  }, [])
  const refs = {}

  return (
    <nav className={styles.NavBar}>
      {React.Children.map(children, child =>
        cloneElement(child, {
          ref: e => (refs[child.props.to] = e),
        })
      )}
      <NavIndicator position={positions[path]} />
    </nav>
  )
}

export default NavBar
