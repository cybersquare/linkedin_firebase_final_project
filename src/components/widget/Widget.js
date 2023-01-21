import styles from "./Widget.module.css";

import Info from '@mui/icons-material/Info';
import NewsItem from "./Newsitem";



function Widget(){
    const news = [{"title":"title 1", "subtitle": "This is a sub title"},
    {"title":"title 1", "subtitle": "This is a sub title"},
    {"title":"title 1", "subtitle": "This is a sub title"}]
    return(
        <div className={styles.widget}>
            <div className={styles.widget__header}>
                <h3>Linkedin news</h3>
                <Info/>

            </div>
            
            {
                news.map((item, index)=>
                <NewsItem title={item.title}
                subtitle={item.subtitle}/>
                )
            }
                
            

        </div>
    );
}

export default Widget;