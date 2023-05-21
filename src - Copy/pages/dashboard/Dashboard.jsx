import React from 'react'
import "./Dashboard.css"
import logo from "C:/Users/jaimy/homefinder/src/images/homefinders-low-resolution-logo-color-on-transparent-background.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faRightFromBracket,faTableColumns,faHome} from '@fortawesome/free-solid-svg-icons';
import {useContext} from "react";
import {AuthContext} from '../../context';
export default function Dashboard(){
    const{user}=useContext(AuthContext);
    console.log(user);
    if(user){
    return(
        <div class="full">
            <div className="dashbar">
            <div className="dashleft">
                <a href="/"><img class="logod" src={logo}></img></a>
            </div>
            <div className="dashright">
                <div class="username"><p><b>{user.displayName}</b></p></div>
                <div class="userpic"><img src={user.photoURL}></img></div>
                </div>
            </div>
            <div class="cont">
            <div class="dashnav">
                <button class="but1"><a href="/"><b>HOME<FontAwesomeIcon icon={faHome} className="fa"/></b></a></button>
                <button class="but2"><a href="#"><b>DASHBOARD<FontAwesomeIcon icon={faTableColumns} className="fa"/></b></a></button>
                <button class="but3"><a href="/"><b>LOG OUT<FontAwesomeIcon icon={faRightFromBracket} className="fa"/></b></a></button>
            </div>
            <div class="dash-main">
                <div class="pg1"></div>
                <div class="pg2"></div>
                <div class="pg3"></div>
            </div>
            <div class="dash-section">
            </div>
            </div>
        </div>

    )
}
}