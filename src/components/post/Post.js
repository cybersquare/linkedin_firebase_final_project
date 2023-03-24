import React from "react";
import styles from "./Post.module.css"
import InputOptions from "../feed/InputOptions";

import { Avatar } from "@mui/material";
import { ThumbsUpDown } from "@mui/icons-material";
import { ChatOutlined } from "@mui/icons-material";
import { ShareOutlined } from "@mui/icons-material";
import { SendOutlined } from "@mui/icons-material";


function Post(){
    return(
        <div className={styles.post}>
            <div  className={styles.post__header}>
                <Avatar/>
                <div className={styles.post__info}>
                    <h2>Name</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className={styles.post__body}>
                    Message goes here
            </div>
            <div className={styles.post__button}>
            <InputOptions Icon={ThumbsUpDown} title="Like" color="#70B5F9"/>
            <InputOptions Icon={ChatOutlined} title="Comment" color="#70B5F9"/>
            <InputOptions Icon={ShareOutlined} title="Share" color="#70B5F9"/>
            <InputOptions Icon={SendOutlined} title="Send" color="#70B5F9"/>
            </div>

        </div>
    );
}

export default Post;