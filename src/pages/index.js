import React, { Component } from "react"
import { Link } from "gatsby"
import Typed from "typed.js"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"

class IndexPage extends Component {
  spanRef = React.createRef();

  componentDidMount() {
      const options = {
          stringsElement: "#typed-strings",
          typeSpeed: 50,
          backSpeed: 50,
          loop: false
      }
      this.typed = new Typed(this.spanRef.current, options);
      let cursor = document.getElementsByClassName("typed-cursor")[0]
      cursor.height = "1.5rem";
  }

  componentWillUnmount() {
      this.typed.destroy();
  }

  render() {
    return (
      <Layout>
        <SEO 
          title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <section className={styles.Home}>
            <div className={styles.Grid}>
              <section className={styles.Intro}>
                <h1 className={styles.Name}>
                  Thanh Doan
                </h1>

                <h2 className={styles.Aspiring}>
                  Aspiring
                </h2>

                <h2 className={styles.WebDeveloper}>
                  Web Developer
                </h2>

                <div className={styles.Typed}>
                  <div id="typed-strings">
                      <p>Frontend. Backend. Design.</p>
                  </div>
                  <div style={{ fontWeight: 500 }} ref={this.spanRef}></div>
                </div>

                <Link className={styles.ProjectsLink} to="/projects">
                View my projects
              </Link>
              </section>

              <div className={styles.Description}>
              <p>
              Hey there, I'm a programmer from Manchester with an eye for design. Currently looking for my first role in web development.
              </p>
              </div>


            </div>



          </section>
      </Layout>
    );
  }
}

export default IndexPage
