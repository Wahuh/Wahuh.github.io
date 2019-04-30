import React from "react";
import styles from "./Details.module.scss";

const Details = ({ list }) => (
    <ul className={styles.Details}>
        {list && list.map(item => <li className={styles.Bullet}>{item}</li>)}
    </ul>
);

export default Details;