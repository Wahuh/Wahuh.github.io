import React, { Component } from "react";
import SearchBar from "../SearchBar";
import SkillCard from "../SkillCard";
import Mark from "mark.js";
import styles from "./SearchFilter.module.scss";
import skills from "../../data/skillsData";

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
                                {skills.creative.map(skill => <SkillCard key={skill.name} skill={skill} />)}
                        </>
                    )}
                </div>
            </>
        );
    }
}

export default SearchFilter;