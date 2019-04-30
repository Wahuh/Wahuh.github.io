import React, { Component } from "react";
import styles from "./Toast.module.scss";


const statuses = {
    "success": styles.Success,
    "error": styles.Failure,
}

class Toast extends Component {
    render() {
        const { toast } = this.props;
        const { message, status } = toast;
        return (
            <div className={styles.Toast}>
                <div className={`${styles.Status} ${statuses[status]}`}>
                </div>
                <div className={styles.Message}>
                    <p>
                        {message}
                    </p>
                </div>
            </div>

        );
    }
}

export default Toast;