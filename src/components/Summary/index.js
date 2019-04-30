import React, { Component } from "react";
import ExpandIcon from "../icons/ExpandIcon";
import MinimizeIcon from "../icons/MinimizeIcon";
import styles from "./Summary.module.scss";

class Summary extends Component {
    state = {
        isOpen: false
    }

    componentDidMount() {

    }

    handleCollapse = () => {
        this.setState(prevProps => ({ isOpen: !prevProps.isOpen }));
    }

    render() {
        const { text, children } = this.props;
        const { isOpen } = this.state;
        return (
            <div className={styles.Collapse}>
                <div onClick={this.handleCollapse} className={styles.Summary}>
                    <p>{text}</p>
                    {isOpen ? <MinimizeIcon /> : <ExpandIcon />}
                </div>
    
                {isOpen && children}
            </div>
        );
    }
}

export default Summary;