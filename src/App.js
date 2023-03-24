import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import WebRoutes from './routes/WebRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <WebRoutes/>
    </BrowserRouter>
    
  );
}

export default App;
