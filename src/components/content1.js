import React from 'react'
import '../styles/content.css';

const Content1=(props)=>{
    return(
        <div>
            <h2>{props.firstText}</h2>
            <h3>{props.secondText}</h3>
            <div>
                <a href="#">{props.link1}</a>
                <a href="#">{props.link2}</a>
            </div>
        </div>
    );
}

export default Content1;