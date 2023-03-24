import React from "react";
import Search from '@mui/icons-material/Search';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import Home from '@mui/icons-material/Home';
import Chat from '@mui/icons-material/Chat';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Notifications from '@mui/icons-material/Notifications';

import logo from "../../logo.svg";
import styles from "./Header.module.css";
import HeaderOptions from "../header_options/HeaderOptions";
import { useState } from "react";

function Header(){
    const [selectedTab, setSelectedTab] = useState("Home");
    return(
        <div className={styles.header}>
            <div className={styles.header__left}>
            <img src={logo} alt="logo" />
                <div className={styles.header__search}>
                <Search/>
                <input type="text" placeholder='search'/>
                </div>
               
            </div>
            <div className={styles.header__right}>
                <div onClick={()=>setSelectedTab("Home")} >
                    <HeaderOptions Icon={Home}  title="Home" isSelected={selectedTab==="Home"?true:false}/>
                </div>
                <div onClick={()=>setSelectedTab("My Network")} >
                    <HeaderOptions Icon={SupervisorAccount} title="My Network" isSelected={selectedTab==="My Network"?true:false}/>
                </div>
                <div onClick={()=>setSelectedTab("Jobs")} >
                    <HeaderOptions Icon={BusinessCenter} title = "Jobs" isSelected={selectedTab==="Jobs"?true:false}/>
                </div>
                <div onClick={()=>setSelectedTab("Chat")} >
                    <HeaderOptions Icon={Chat} title = "Chat" isSelected={selectedTab==="Chat"?true:false}/>
                </div>
                <div onClick={()=>setSelectedTab("Notification")} >
                    <HeaderOptions Icon={Notifications} title = "Notification" isSelected={selectedTab==="Notification"?true:false}/>
                </div>
                <HeaderOptions avatar="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" title = "Me"/>
            </div>
        </div>
    );
}

export default Header;