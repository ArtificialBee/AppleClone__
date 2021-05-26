import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar.js';
import Content1 from './components/content1';

const App=()=> {
  return(<div className="whole_page"> 
    <Navbar/>
    <Content1 firstText="Edvin Sacic" secondText="Dobro dosli na moj React webpage!" link1="Learn more" link2="Buy"/>
  </div>);
}

export default App;
