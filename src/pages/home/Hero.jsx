import React from "react";
import './Hero.css'
import logopng from "../../images/homefinders-low-resolution-logo-color-on-transparent-background.png"
import hero from "../../images/hero.jpg"
export default function Hero() {
  return (
    <div className="hero">
      <div className="nav">
        <div className="nav-left">
          <img class="logoh"src={logopng}></img>
        </div>
        <div className="nav-right">
          <a className="log" href="/login">Login</a>
        </div>
      </div>
      <div className="hero-cont">
        <div className="hero-left">
          <h1>Discover your dream <span>homely</span> PG today</h1>
          <a href="/login"><button>Join Now</button></a>
        </div>
        <div className="hero-right">
        <img src={hero}></img>
        </div>

      </div>
    </div>
  );
}