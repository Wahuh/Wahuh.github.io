import React from "react";
import styles from "./CardHeader.module.scss";

const CardHeader = ({ children }) => (
    <div className={styles.CardHeader}>
        {children}
    </div>
);

export default CardHeader;