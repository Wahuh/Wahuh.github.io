import React from "react";
import styles from "./Chip.module.scss";

const Chip = ({ text }) => (
    <span className={styles.Chip}>
        <small>{text}</small>
    </span>
)

export default Chip;