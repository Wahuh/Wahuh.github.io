import React, { Component } from "react";
import styles from "./ContactEmail.module.scss";
import CopyIcon from "./CopyIcon";
import Toast from "../Toast";

class ContactEmail extends Component {
    state = { show: false, showToast: false }
    constructor(props) {
        super(props);
        this.email = null;
        this.copyEmail = this.copyEmail.bind(this);
    }

    copyEmail() {
        this.email.select();
        document.execCommand("copy");
        this.setState(prevstate => ({ 
            show: true,
            showToast: true
        }));
        setTimeout(
            () => {
                this.setState(prevstate => ({ show: false, showToast: true }));
            },
            1500
        );
    }
    
    render() {
        const { showToast, show } = this.state;
        return (
            <div className={styles.EmailContainer} >
                <div className={styles.TooltipContainer}>
                    <input className={styles.Input} ref={(input) => { this.email = input; }} type="email" value="tmdoan98@gmail.com" readOnly />
                </div>
                <button className={styles.CopyButton} onClick={this.copyEmail}>
                    <CopyIcon />
                </button>

                {showToast ? 
                    <Toast 
                        toast={{ 
                            message: "Copied to clipboard!", 
                            "status": "success"
                        }} /> : <div></div>
                }
            </div>
        );
    }
}

export default ContactEmail;