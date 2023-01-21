import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./components/header/Header";
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widget from './components/widget/Widget';
function App() {
  return (
    <div className="App">
      
      <Header/>

     
      <div className='app__body'>
        <Sidebar/>
        <Feed/>
        <Widget/>
 {/* <Counter /> */}
      </div>
     
    
       
    </div>
  );
}

export default App;
