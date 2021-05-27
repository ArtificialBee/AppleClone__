import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar.js';
import Content1 from './components/content1';

const App=()=> {
  return(<div className="whole_page"> 
    <Navbar/>
    <Content1 firstText="iPad Pro" secondText="Supercharged by the Apple M1 chip." link1="Learn more" link2="Buy" cName="first_content" />
    <Content1 firstText="iPhone 12" secondText="Blast past fast" link1="Learn more" link2="Buy" cName="second_content"/>
    <Content1 firstText="iMac" secondText="Say hello." link1="Learn more" link2="Buy" cName="third_content"/>
  </div>);
}

export default App;
