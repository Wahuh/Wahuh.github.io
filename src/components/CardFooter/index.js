import React from "react";
import styles from "./CardFooter.module.scss";

const CardFooter = ({ children }) => (
    <div className={styles.CardFooter}>
        {children}
    </div>
);

export default CardFooter;