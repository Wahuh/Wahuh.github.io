import React from "react";
import styles from "./Card.module.scss";

const Card = ({ children, className, animationClassName }) => (
    <section className={`${className ? className : styles.Card} ${animationClassName}`}>
        {children}
    </section>
);

export default Card;