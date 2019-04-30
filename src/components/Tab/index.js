import React, { Children } from "react";
import styles from "./Tab.module.scss"

const Tab = ({ children }) => (
    <li className={styles.Tab}>{children}</li>
);

export default Tab;
