import React from 'react';
import IllustrationBW from '../../../assets/resume-illustration-bw.svg';
import IllustrationColor from '../../../assets/resume-illustration-color.svg';
import Resume from '../../../assets/Ghina_Yashar_Resume.pdf';
import './resume.scss';
import '../../styles/home.scss';

export default (
  <div className="resumeSection">
    <div className="resumeText">
      <div className="titleContainer">
        <h2 className="sectionSubtitle resumeTitle">
          My <br className="mobileBreak" />
          Resume
        </h2>
        <IllustrationBW className="mobileImage mobileResumeImage lightModeIllustration" />
        <IllustrationColor className="mobileImage mobileResumeImage darkModeIllustration" />
      </div>
      <p>
        I'm always on the lookout for new and exciting opportunities, right here
        in Melbourne or wherever else in the world.
        <br />
        <br />
        If you'd like to find out more about my experience and capabilities,
        please have a read through my full resume here.
      </p>
      <a className="actionButton" href={Resume}>
        Download
      </a>
    </div>
    <IllustrationBW className="desktopImage desktopResumeImage lightModeIllustration" />
    <IllustrationColor className="desktopImage desktopResumeImage darkModeIllustration" />
  </div>
);
