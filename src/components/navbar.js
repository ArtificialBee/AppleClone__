import React from 'react'
import List from './list'
import '../styles/navbar.css'
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="navigation">
                <List first="Mac" second="iPad" third="iPhone" fourth="Watch" fifth="TV" sixth="Music" seventh="Support"/>
            </div>
        </div>
    );
}

export default Navbar;