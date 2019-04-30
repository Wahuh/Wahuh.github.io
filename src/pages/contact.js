import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./contact.module.scss";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import GithubIcon from "../components/icons/GithubIcon";
import ContactEmail from "../components/ContactEmail";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Contact Thanh Doan via email or Linkedin." keywords={[`Contact`, `Linkedin`, `Email`, `Github`]} />
    <div className={styles.Contact}>
      <h2>
        Feel free to contact me via email or Linkedin.
      </h2>
      <ContactEmail />
      <p>Thanks for stopping by. A little bit about me.</p>
      <p>A little bit about me:</p>
      <p> After graduating from the University of Nottingham with a BSc in Neuroscience, I worked in marketing for a year. Then I discovered programming and decided that it was what I truly wanted to do! I enjoy working on all parts of the stack and building apps for people to use gives me great satisfaction.</p>
      <div className={styles.Links}>
        <a href="https://www.linkedin.com/in/thanh-doan-web-developer" rel="noopener" target="_blank" className={styles.Linkedin}>
          <LinkedinIcon />
        </a>
        <a href="https://github.com/Wahuh" rel="noopener" target="_blank" className={styles.Github}>
          <GithubIcon />
        </a>
      </div>

    </div>
  </Layout>
)

export default ContactPage
