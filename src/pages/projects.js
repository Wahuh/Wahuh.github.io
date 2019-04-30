import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./projects.module.scss";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    "name": "Slacker.io",
    "subtitle": "Real-time task management and chat - inspired by Slack, Trello and Discord.",
    "description": "Create groups, invite friends or colleagues. Registration is required but you can sign up with a dummy email or delete your account after trying out the app.",
    "githubLink": "https://github.com/Wahuh/slacker",
    "demoLink": "",
    "features": ["Scale", "asdsad", "adasd"],
    "tags": ["react", "redux", "redux-saga", "mongoose", "express", "socket.io", "webpack", "sass"]
  },

  {
      "name": "Umineko",
      "subtitle": "An app for learning Hiragana and Katakana",
      "description": "Create groups, invite friends or colleagues. Registration is required but you can delete your account after trying out the app",
      "githubLink": "",
      "demoLink": "",
      "features": [],
      "tags": ["react", "mobx", "sass", "Material-UI"]
  },

  {
      "name": "Remind Me",
      "subtitle": "Do you forget things? Here's a progressive web app which sends you reminders. It works offline too!", 
      "description": "Create groups, invite friends or colleagues. Registration is required but you can delete your account after trying out the app",
      "githubLink": "https://github.com/Wahuh/remind-me",
      "demoLink": "https://wahuh.github.io/remind-me/",
      "features": [],
      "tags": ["react", "css", "service workers"]
  }
]
class ProjectsPage extends Component {
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


export default ProjectsPage
