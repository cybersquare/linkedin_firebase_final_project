import styles from "./RecentItems.module.css"
import React from "react";

function RecentItems(props){
    return(
        <div className={styles.sidebar__recent_items}>
            <span className={styles.item}>#{props.item.name}</span>
        </div>
    );

}

export default RecentItems;