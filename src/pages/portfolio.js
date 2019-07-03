import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./portfolio.module.scss";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";

class PortfolioPage extends Component {
  state = {

  }

  componentDidMount() {
      const newState = {};
      for (let i = 0; i < projects.length; i++) {
          newState[i] = false;
      }
      this.setState(() => newState);
      let time = 0;
      for (let i = 0; i < projects.length; i++) {
          setTimeout(
              () => this.setState(prevState => ({ ...prevState, [i]: !prevState[i]  })),
              time
          )
          time += 300;
      }
  }

  render() {
    return (
      <Layout>
        <SEO title="Project" description="View Thanh Doan's projects here." keywords={[`gatsby`, `application`, `react`]} />
        <div className={styles.Projects}>
          <ul className={styles.ProjectsList}>
            {projects.map(project => <ProjectCard render={this.state[projects.indexOf(project)]} key={project.name} project={project} />)}
          </ul>
        </div>
      </Layout>
    );
  }
}


export default PortfolioPage
