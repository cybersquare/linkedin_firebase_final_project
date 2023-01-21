import styles from "./SidebarStat.module.css";

function SidebarStat({text, data}){
    return(
        <div className={styles.SidebarStat}>
            <p >{text}</p>
            <p className={styles.SidebarStat__data}>{data}</p>
        </div>
    );

}

export default SidebarStat;