import React from 'react'
import styles from './NavIndicator.module.scss'

const NavIndicator = ({ position }) => {
  console.log(position && position.left)
  return position ? (
    <div
      style={{
        left: position.left,
        // transform: `translate3d(${position.left}px, 0, 0)`,
        width: `${position.width}px`,
      }}
      className={styles.NavIndicator}
    ></div>
  ) : null
}

export default NavIndicator
