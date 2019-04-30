import React, { Component } from "react";
import SearchBar from "../SearchBar";
import SkillCard from "../SkillCard";
import Mark from "mark.js";
import styles from "./SearchFilter.module.scss";

const skills = {
    "technical": [
      {
        "name": "JavaScript",
        "details": [
          "I use ES6 and later versions"
        ],
        "tags": 
          ["react", "jsx", "koa", "react-router", "redux", "redux-saga", "axios", "mongoose", "express", "mobx", "material-ui", "jquery", "webpack", "socket.io", "jest", "enzyme", "supertest", "gatsby", "parcel"]
      },
  
      {
        "name": "CSS",
        "details": [
          "can implement any design in css from any website",
          "comfortable writing css from scratch to implement features such as modals.",
          "happy to use css libraries as well."
        ],
        "tags": ["sass", "bootstrap", "css modules"]
      },
      {"name": "HTML", "tags": ["html5"]},
      {"name": "C#", "tags": ["asp.net"]},
      {"name": "SEO", "details": []},
      {"name": "Accessibility", "details": []},
  
      {
        "name": "Testing", 
        "details": [
          "Unit testing", 
          "Integration testing", 
        ]
      },
      {"name": "Python", "tags": ["flask", "pandas"]},
      {"name": "SQL", "tags": ["MySQL", "SQLite", "SQLAlchemy"]},
      {"name": "Databases", "tags": ["mysql"]},
      {"name": "Command Line", "tags": []},
      {"name": "Git", "tags": []},
      {"name": "Wordpress", "tags": []}
    ],
    "creative": [],
    "marketing": []
  }
  //string.startsWith(query) || 
const match = (query, string) => string.includes(query);
class SearchFilter extends Component {
    state = {
        query: ""
    }

    componentDidMount() {
        this.highlight = document.getElementById("highlight");
        this.instance = new Mark(this.highlight);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.query, "updated");
        if (this.state.query) {
            this.instance.unmark();
            this.instance.mark(this.state.query.toLowerCase(), { className: styles.Mark });
        } else {
            this.instance.unmark();
        }
    }

    handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        if (value) {
            this.setState({ isSearching: true, query: value });
        } else {
            this.setState({ isSearching: false, query: value });
        }
    }

    handleCancel = () => {
        this.setState({ isSearching: false, query: "" });
    }

    render() {
        const { query } = this.state;
        let filteredSkills;

        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            const combinedArrays = [ ...skills.technical, ...skills.creative ];
            filteredSkills = combinedArrays.filter(({ name, details, tags }) => {
                if (match(lowerCaseQuery, name.toLowerCase())) return true;
                if (details) {
                    for (let i = 0; i < details.length; i++) {
                        if (match(lowerCaseQuery, details[i].toLowerCase())) return true;
                    }
                }
                if (tags) {
                    for (let i = 0; i < tags.length; i++) {
                        if (match(lowerCaseQuery, tags[i].toLowerCase())) return true;
                    }
                }
                return false;
            });
        }
        return (
            <>
                <SearchBar 
                    value={query} 
                    onChange={this.handleChange}
                    onCancel={this.handleCancel}
                />
                <div id="highlight" className={styles.Highlight}>
                    {query ? (
                        filteredSkills.map(skill => <SkillCard key={skill.name} skill={skill} />)
                    ) : (
                        <>
                            <h2>Technical</h2>
                                {skills.technical.map(skill => <SkillCard key={skill.name} skill={skill} />)}
                            <h2>Creative</h2> 
                        </>
                    )}
                </div>

            </>
        );
    }
}

export default SearchFilter;