import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import IllustrationBW from '../../../assets/resume-illustration-bw.svg';
import IllustrationColor from '../../../assets/resume-illustration-color.svg';
import ResumeFile from '../../../assets/Ghina_Yashar_Resume.pdf';
import './resume.scss';
import '../../styles/home.scss';

const Resume = () => {
  const breakpoints = useBreakpoint();
  const isMobileView = breakpoints.sm;

  return (
    <div className="resumeSection">
      <div className="resumeText">
        <div className="titleContainer">
          <h2 className="sectionSubtitle resumeTitle">
            My {isMobileView && <br/>}
            Resume
          </h2>
          {isMobileView && <IllustrationBW className="mobileResumeImage lightModeOnly" />}
          {isMobileView && <IllustrationColor className="mobileResumeImage darkModeOnly darkModeIllustration" />}
        </div>
        <p>
          I'm always on the lookout for new and exciting opportunities, right here
          in Melbourne or wherever else in the world.
          <br />
          <br />
          If you'd like to find out more about my experience and capabilities,
          please have a read through my full resume here.
        </p>
        <a className="actionButton" href={ResumeFile}>
          Download
        </a>
      </div>
      {!isMobileView && <IllustrationBW className="desktopResumeImage lightModeOnly" />}
      {!isMobileView && <IllustrationColor className="desktopResumeImage darkModeOnly darkModeIllustration" />}
    </div>
  );
};

export default Resume;