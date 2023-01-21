import styles from "./RecentItems.module.css"

function RecentItems(props){
    return(
        <div className={styles.sidebar__recent_items}>
            <span className={styles.item}>#{props.item.name}</span>
        </div>
    );

}

export default RecentItems;