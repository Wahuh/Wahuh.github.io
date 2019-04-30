import React from "react";
import styles from "./CardMedia.module.scss";

const CardMedia = ({ children }) => {
    return (
        <div className={styles.CardMedia}>
            {children}
        </div>
    );
}

export default CardMedia;