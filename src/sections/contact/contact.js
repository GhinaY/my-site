import React from 'react';
import IllustrationBW from '../../../assets/contact-illustration-bw.svg';
import IllustrationColor from '../../../assets/contact-illustration-color.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.scss';
import '../../styles/home.scss';

export default (
  <div className="contactSection">
    <IllustrationBW className="desktopImage desktopContactImage lightModeIllustration" />
    <IllustrationColor className="desktopImage desktopContactImage darkModeIllustration" />
    <div className="contactText">
      <h2 className="sectionSubtitle contactTitle">Contact Me</h2>
      <p>
        If you'd like to reach out to me, professionally or personally, you can
        use the following channels.
      </p>
      <div className="contactButtonsSet">
        <a
          href="mailto:contact@ghina.dev"
          className="contactButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="contactButtonIcon"
          />
        </a>
        <a
          href="http://linkedin.com/in/ghina-yashar"
          className="contactButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            className="contactButtonIcon"
          />
        </a>
        <a
          href="https://www.facebook.com/ghina.yas"
          className="contactButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            size="2x"
            className="contactButtonIcon"
          />
        </a>
      </div>
    </div>
  </div>
);
