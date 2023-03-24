import styles from "./NewsItem.module.css";
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import React from "react";

function NewsItem({title, subtitle}){
    return(
        <div className={styles.news_item}>
            <div className={styles.news_item__left}>
                <FiberManualRecord style={{width:10, height:10,color:'#636363'}}/>
            </div>
            <div className={styles.news_item__right}>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default NewsItem;