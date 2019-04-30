import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component, createRef } from "react"
import styles from "./Header.module.scss"
import Indicator from "../Indicator";

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <nav className={styles.Nav}>

            <Link className={styles.NavLink} activeClassName={styles.Selected} to="/">
                Home
            </Link>


            <Link className={styles.NavLink} activeClassName={styles.Selected} to="/projects/">
                Projects
            </Link>


            <Link className={styles.NavLink} activeClassName={styles.Selected} to="/skills/">
                Skills
            </Link>

            <Link className={styles.NavLink} activeClassName={styles.Selected} to="/contact/">
                Contact
            </Link>

        </nav>
      </header>
    );
  }
}

export default Header
