import React from "react";
import styles from "./Dashboard.module.css"

import Header from "../header/Header";
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feed/Feed';
import Widget from '../widget/Widget';
import { Helmet } from 'react-helmet';

function Dashboard(){
    return(
       
        <div className={styles.dashboard}>
        <Helmet>
            <title>Linkedin feed</title>
        </Helmet>
        <Header/>
        <div className='app__body'>
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      </div>
    );
}

export default Dashboard