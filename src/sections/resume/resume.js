import React from 'react';
import Illustration from '../../../assets/folder-woman.svg';
import './resume.scss';
import '../../styles/home.scss';

export default (
    <div className='resumeSection'>
      <div className='resumeText'>
        <div className='titleContainer'>
          <h2 className='sectionSubtitle resumeTitle'>My <br className='mobileBreak' />Resume</h2>
          <Illustration className='mobileResumeImage' />
        </div>
        <p>I'm always on the lookout for new and exciting opportunities,
          right here in Melbourne or wherever else in the world.<br /><br />
          If you'd like to find out more about my experience and capabilities,
          please have a read through my full resume here.</p>
        <button className='actionButton'>Download</button>
      </div>
      <Illustration className='desktopResumeImage' />
    </div>
);