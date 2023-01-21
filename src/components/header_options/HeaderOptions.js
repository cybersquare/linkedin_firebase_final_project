import { Avatar } from "@mui/material";
import styles from "./HeaderOptions.module.css";

function HeaderOptions({avatar, Icon, title}){

    return(
        <div className={styles.header__options}>
            {Icon && <Icon/>}
            {avatar && <Avatar src={avatar} className={styles.header__options__icon}/>}
            <h3 className={styles.header__options__title}>{title}</h3>
        </div>
    )
}

export default HeaderOptions;