import React from 'react';
import ReactMarkdown from "react-markdown";
import Layout from '../components/Layout/Layout';
import Section from '../components/Section/Section';
import profilePic from '../../assets/profilePicture.jpg';
import aboutPic from '../../assets/tulip_field.jpg';
import '../styles/home.scss';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var screenWidth = Math.max(window.screen.width, window.innerWidth);

    // if not mobile
    if (screenWidth > 480) {
        var content = document.getElementById('welcomeBlock').getBoundingClientRect();
        if (content.top < 150) {
            document.getElementById('stickyLine').classList.add('stickyLine');

        } else {
            document.getElementById('stickyLine').classList.remove('stickyLine');
        }
    }
}

const aboutContent = (
    <>
        <div className='aboutSection'>
            <img className='aboutPicture' src={aboutPic} alt='Me in a tulip field' />
            <div className='aboutText'>
                <h3 className='sectionHeader'>Who even am I?</h3>
                <p className='sectionBody'>I'm a Melbourne-based software engineer and developer with a wild imagination, a deep sense of curiosity and many passions. Just to name a few...</p>
            </div>
        </div>
    </>
);

const welcomeBlock = (
    <div id='welcomeBlock' className='welcomeBlock'>
        <img className='mobileProfilePicture' src={profilePic} alt='profile' />
        <div id='stickyLine' className='gradientLine gradientColors' />
        <div className='welcomeContents'>
            <div className='welcomeText'>
                <p className='welcomeSmall'>Hi! I'm</p>
                <h1 className='welcomeLarge'>G H I N A</h1>
                <p className='welcomeSmall'>Developer | Plant enthusiast | Friend :)</p>
                <p className='welcomeMedium'>Welcome to my site!</p>
            </div>
            <img className='desktopProfilePicture' src={profilePic} alt='profile' />
        </div>
        <div className='gradientLine gradientColors' />
    </div>
);

export default () => (
    <Layout>
        {welcomeBlock}
        <Section id='About' content={aboutContent} />
        <span className='quoteText gradientColors'>"Stay hungry; Stay foolish"</span>
    </Layout>
);
