import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component, createRef } from "react"
import styles from "./Header.module.scss"
import Indicator from "../Indicator"
import NavBar from "../NavBar"

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <NavBar />
      </header>
    )
  }
}

export default Header
