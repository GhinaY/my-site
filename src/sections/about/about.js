import React from 'react';
import aboutPic from '../../../assets/tulip_field.jpg';
import wordCloud from '../../components/WordCloud/WordCloud';
import './about.scss';
import '../../styles/home.scss';

export default (
  <div className="aboutSection">
    <div className="aboutContent">
      <img className="aboutPicture" src={aboutPic} alt="Me in a tulip field" />
      <div className="aboutText">
        <h3 className="sectionSubtitle">Who even am I?</h3>
        <p className="sectionBody">
          I'm a London-based software engineer and developer with a wild
          imagination, a deep sense of curiosity and many passions. I want to
          travel the world, fall then get back up again and do it all while
          having fun.
        </p>
      </div>
    </div>
    {wordCloud}
  </div>
);
