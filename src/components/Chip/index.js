import React from "react";
import styles from "./Chip.module.scss";

const Chip = ({ text }) => (
    <span className={styles.Chip}>
        <p>{text}</p>
    </span>
)

export default Chip;