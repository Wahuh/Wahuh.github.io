import React, { Component } from "react";
import CloseIcon from "../icons/CloseIcon";
import SearchIcon from "../icons/SearchIcon";
import styles from "./SearchBar.module.scss";

class SearchBar extends Component {
    state = {
        isFocused: false
    }

    handleFocus = () => {
        this.setState(prevProps => ({ isFocused: !prevProps.isFocused }));
    }

    render() {
        const { value, onChange, onCancel, isSearching } = this.props;
        const { isFocused } = this.state;
        return (
            <span className={`${styles.SearchWrapper} ${isFocused && styles.isFocused}`}>
                <input
                    onFocus={this.handleFocus}
                    onChange={onChange}
                    onBlur={this.handleFocus}
                    className={styles.SearchBar}
                    value={value} 
                    placeholder="search skills..."
                />
                {value ? (
                    <button onClick={onCancel} className={styles.IconWrapper}>
                        <CloseIcon />
                    </button>
                ) : (
                    <div className={styles.IconWrapper}>
                        <SearchIcon /> 
                    </div>
                )}

            </span>
        );
    }
}

export default SearchBar;