import React from 'react'
import NavBar from '../../NavBar'
import classNames from 'classnames'

import styles from './Navigation.module.scss'
const Navigation = ({ isOpen }) => (
  <div className={classNames(styles.Navigation, { [styles.open]: isOpen })}>
    <NavBar isOpen={isOpen} />
  </div>
)

export default Navigation
