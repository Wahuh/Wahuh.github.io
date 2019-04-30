import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styles from "./skills.module.scss";
import SearchFilter from "../components/SearchFilter";

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" description="A list of all the technical and creative skills I have developed." keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.Skills}>
      <section className={styles.SkillsList}>
        <SearchFilter />
      </section>
    </div>
  </Layout>
)

export default SkillsPage
