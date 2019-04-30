import React from "react";
import styles from "./DemoLink.module.scss";

const DemoLink = ({ to }) => (
    <a href={to} rel="noopener" target="_blank" className={styles.DemoLink}>Live Demo</a>
)

export default DemoLink;