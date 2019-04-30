import React from "react";
import styles from "./GithubLink.module.scss";

const GithubLink = ({ to }) => (
    <a href={to} rel="noopener" target="_blank" className={styles.GithubLink}>Github</a>
)

export default GithubLink;