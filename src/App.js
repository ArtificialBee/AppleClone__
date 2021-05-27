import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar.js';
import Content1 from './components/content1';

const App=()=> {
  return(<div className="whole_page"> 
    <Navbar/>
    <Content1 firstText="iPad Pro" secondText="Supercharged by the Apple M1 chip." link1="Learn more" link2="Buy"/>
  </div>);
}

export default App;
