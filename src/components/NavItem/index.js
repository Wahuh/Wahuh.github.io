import React, { forwardRef } from 'react'
import { Link } from 'gatsby'
import styles from './NavItem.module.scss'

const NavItem = ({ to, children }) => (
  <Link className={styles.NavItem} activeClassName={styles.Active} to={to}>
    <span className={styles.Indicator}>{children}</span>
  </Link>
)

export default NavItem
