import React, { Component } from "react";

import Card from "../Card";
import CardHeader from "../CardHeader";
import CardBody from "../CardBody";
import CardFooter from "../CardFooter";
import styles from "./ProjectCard.module.scss";
import GithubLink from "../GithubLink";
import DemoLink from "../DemoLink";
import CardMedia from "../CardMedia";
import video from "../../videos/Remind me.webm";
import Summary from "../Summary";
import Chip from "../Chip";
import Details from "../Details";

class ProjectCard extends Component {
    state = {
        isLoaded: false
    }
    handleLoad = () => {
        this.setState({ isLoaded: true });
        console.log("loaded");
    }
    render() {
        const { project, render } = this.props;
        const { isLoaded } = this.state;
        const { name, subtitle, description, githubLink, demoLink, features, tags } = project;
        return (
            <Card animationClassName={render ? styles.Animate : styles.Hide}>
                <CardMedia>
                    <video className={styles.Video} loop autoPlay>
                        <source src={video} type="video/webm" />
                    </video>
                </CardMedia>

                <CardHeader>
                    <h2 className={styles.Title}>{name}</h2>
                    <h3 className={styles.Subtitle}>
                        {subtitle}
                    </h3>
                </CardHeader>



                <CardBody>
                    <section className={styles.Section}>
                        <p>
                            {description}
                        </p>
                    </section>

                    <section className={styles.Section}>
                        <Summary text="Features List">
                            <Details list={features} />
                        </Summary>
                    </section>

                    <section className={styles.Tags}>
                        {tags.map(tag => <Chip text={tag} />)}
                    </section>
                </CardBody>

                <CardFooter>
                    <div className={styles.Actions}>
                        <GithubLink to={githubLink} />
                        <DemoLink to={demoLink} />
                    </div>
                </CardFooter>
            </Card>
        )
    }
}

export default ProjectCard;