import { Avatar } from "@mui/material";
import React from "react";
import styles from "./Sidebar.module.css"
import SidebarStat from "./SidebarStat";
import RecentItems from "../recent_items/RecentItems";

function Sidebar(){

    const recentItems = [{"name":"Events"}, {"name":"Programming languages"}, 
    {"name":"Groups"}, {"name":"Hash tags"}];

    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebar__top}>
                <img src="https://shorturl.at/hiwJY" alt="sidebar banner"/>
                <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                 alt="avatar" className={styles.sidebar__avatar}/>
                <h2 >Monish Mohan V T</h2>
                <h4>Content development</h4>
            </div>

            <div className={styles.sidebar__stats}>
                <SidebarStat text="Who has viewed your profile" data="121"/>
                <SidebarStat text="Impressions of your post" data="33"/>
            </div>
            <div className={styles.sidebar__bottom}>
                <p>Recent</p>
                {
                    recentItems.map((item, index)=>{
                        return<RecentItems item={item} key={index}/>
                    })
                }
            </div>

            

        </div>
    );
}

export default Sidebar;