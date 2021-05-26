import React from 'react'
import '../styles/List.css'
import logo from '../images/apple_logo_PNG19670.png'
import loupe from '../images/loupe.png'
import bag from '../images/bag.png'

const List=(props)=>{
    return(
        <ul className="list">
            <li><a href="#" class="item"><img src={logo} className="logo"/></a></li>
            <li><a href="#" class="item">{props.first}</a></li>
            <li><a href="#" class="item">{props.second}</a></li>
            <li><a href="#" class="item">{props.third}</a></li>
            <li><a href="#" class="item">{props.fourth}</a></li>
            <li><a href="#" class="item">{props.fifth}</a></li>
            <li><a href="#" class="item">{props.sixth}</a></li>
            <li><a href="#" class="item">{props.seventh}</a></li>
            <li><a href="#" class="item"><img src={loupe} className="loupe"/></a></li>
            <li><a href="#" class="item"><img src={bag} className="bag"/></a></li>
        </ul>
    );
}

export default List;