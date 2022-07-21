import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import Section from '../components/Section/Section';
import welcomeBlock from '../sections/welcome/welcome';
import aboutSection from '../sections/about/about';
import skillsSection from '../sections/skills/skills';
import resumeSection from '../sections/resume/resume';
import contactSection from '../sections/contact/contact';
import '../styles/home.scss';

if (typeof window !== 'undefined') {
  window.onscroll = function () {
    scrollFunction();
  };
}

function scrollFunction() {
  var screenWidth = Math.max(window.screen.width, window.innerWidth);

  // if not mobile
  if (screenWidth > 768) {
    var content = document
      .getElementById('welcomeBlock')
      .getBoundingClientRect();
    if (content.top < 150) {
      document.getElementById('stickyLine').classList.add('stickyLine');
    } else {
      document.getElementById('stickyLine').classList.remove('stickyLine');
    }
  }
}

const quote = (
  <div className="quoteBlock">
    <span className="quoteText gradientColors">
      "Stay hungry, stay foolish"
    </span>
    <span className="quoteAuthor">- Steve Jobs</span>
  </div>
);

const Home = () => (
  <>
    <Helmet>
      <title>{`Ghina Yashar | Resume`}</title>
    </Helmet>
    <Layout>
      {welcomeBlock}
      <Section id="About" content={aboutSection} />
      <Section id="Skills" content={skillsSection} />
      <Section id="Resume" content={resumeSection} />
      <Section id="Contact" content={contactSection} />
      {quote}
    </Layout>
  </>
);

export default Home;
