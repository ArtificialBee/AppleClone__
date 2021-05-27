import React from 'react'
import '../styles/content.css';
import iPad from '../images/iPad-Pro.jpg';

const Content1=(props)=>{
    return(
        <div className="first_content">
            <div class="header">
                <h1>{props.firstText}</h1>
                <h3>{props.secondText}</h3>
            </div>

            <div class="links">
                <a href="#">{props.link1}</a>
                <a href="#">{props.link2}</a>
            </div>
        </div>
    );
}

export default Content1;