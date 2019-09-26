import React from 'react'
import Img from 'gatsby-image'
import styles from './Photo.module.css'

const Photo = ({ fixed }) => {
  return <Img className={styles.Photo} fixed={fixed} />
}

export default Photo
