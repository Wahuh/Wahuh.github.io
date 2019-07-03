import React, { forwardRef } from "react"
import { Link } from "gatsby"
import styles from "./NavItem.module.scss"

const NavItem = forwardRef(({ to, children }, ref) => (
  <Link className={styles.NavItem} activeClassName={styles.Selected} to={to}>
    <span ref={ref}>{children}</span>
  </Link>
))

export default NavItem
