import { Avatar } from "@mui/material";
import styles from "./HeaderOptions.module.css";
import React from "react";

function HeaderOptions({avatar, Icon, title, isSelected}){
    return(
        <div className={styles.header__options}>
            {Icon && <Icon/>}
            {avatar && <Avatar src={avatar} className={styles.header__options__icon}/>}
            <h3 className={isSelected? styles.header__options__title_selected: styles.header__options__title}>
                {title}
            </h3>
        </div>
    )
}

export default HeaderOptions;