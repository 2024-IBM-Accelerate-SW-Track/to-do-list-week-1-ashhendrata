import React, { Component } from 'react';

import "./About.css";
import imashley from "../assets/imashley.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
          <div className="centered">
          <img 
          className="profile_image"
          src={imashley}
          alt="Profile Pic"
          ></img>
          </div>
          </div>
          <div className="split right">
          <div className="centered">
          <div className="name_title">Ashley Hendrata</div>
          <div className="brief_description">
          Hi! My name is Ashley Hendrata and I am a double major in Computer Science and Middle Eastern Studies.
          Super excited to be here!
          </div>
          </div>
          </div>
          </div>
      </div>
    )
  }
}