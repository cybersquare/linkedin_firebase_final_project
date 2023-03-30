import React from "react";
import styles from "./Feed.module.css";
import InputOptions from "./InputOptions";
import Post from "../post/Post";

import Image from '@mui/icons-material/Image';
import Subscriptions from '@mui/icons-material/Subscriptions';
import EventNote from '@mui/icons-material/EventNote';
import CalendarViewDay from '@mui/icons-material/CalendarViewDay';
import { Avatar } from "@mui/material";


function Feed(){
    const posts = [
        {avatar:"", name: "Cybersquare", description:"baabte", message:"Lorem ipsum"},
        {avatar:"", name: "Cybersquare", description:"baabte", message:"Lorem ipsum"},
        {avatar:"", name: "Cybersquare", description:"baabte", message:"Lorem ipsum"},
        {avatar:"", name: "Cybersquare", description:"baabte", message:"Lorem ipsum"},
        {avatar:"", name: "Cybersquare", description:"baabte", message:"Lorem ipsum"},
        {avatar:"", name: "Cybersquare", description:"baabte", message:"Lorem ipsum"},
    ]
    return(
        <div className={styles.feed}>
            <div className={styles.feed__input_container}>
                <div className={styles.feed__input}>
                <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
                    <input type="text"  placeholder="Start a post"/> 
                </div>
                <div className={styles.feed__input_options}>
                    <InputOptions Icon={Image} title="Photo" color="#70B5F9"/>
                    <InputOptions Icon={Subscriptions} title="Video" color="#E7833E"/>
                    <InputOptions Icon={EventNote} title="Event" color="#C0CBCD"/>
                    <InputOptions Icon={CalendarViewDay} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            {posts.map((post, index)=><Post data={post}/>)}
        </div>
    );
}


export default Feed;