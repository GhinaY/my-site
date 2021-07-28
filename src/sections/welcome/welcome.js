import React from 'react';
import profilePic from '../../../assets/profilePicture.jpg';
import './welcome.scss';
import '../../styles/home.scss';

export default (
  <div id="welcomeBlock" className="welcomeBlock">
    <img className="mobileProfilePicture" src={profilePic} alt="profile" />
    <div id="stickyLine" className="gradientLine gradientColors" />
    <div className="welcomeContents">
      <div className="welcomeText">
        <p className="welcomeSmall">Hi! I'm</p>
        <h1 className="welcomeLarge">G H I N A</h1>
        <p className="welcomeSmall">Developer | Plant enthusiast | Friend :)</p>
        <p className="welcomeMedium">Welcome to my site!</p>
      </div>
      <img className="desktopProfilePicture" src={profilePic} alt="profile" />
    </div>
    <div className="gradientLine gradientColors" />
  </div>
);
