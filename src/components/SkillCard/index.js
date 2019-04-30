import React from "react";
import Card from "../Card";
import CardHeader from "../CardHeader";
import styles from "./SkillCard.module.scss";
import CardFooter from "../CardFooter";
import Chip from "../Chip";
import Details from "../Details";

const SkillCard = ({ skill }) => {
    const { name, tags, details } = skill;
    return (
        <Card>
            <CardHeader>
                <h2 className={styles.Title}>{name}</h2>
            </CardHeader>
            <CardFooter>
                {details && (
                    <section className={styles.Details}>
                        <Details list={details} />
                    </section>
                )}

                {tags && (
                    <section className={styles.Tags}>
                        {tags.map(tag => <Chip text={tag} />)}
                    </section>
                )}
            </CardFooter>
        </Card>
    );
};

export default SkillCard;