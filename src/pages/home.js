import React from 'react';
import ReactMarkdown from "react-markdown";
import Layout from '../components/Layout/Layout';
import Section from '../components/Section/Section';
import profilePic from '../../assets/profilePicture.jpg';
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

const text = `# About me
hi
my name
_is_
## ghiona
hello`;

const aboutContent = (
    <>
        <h1 id='career' className='rest'>About</h1>
        <ReactMarkdown className='rest' source={text} />
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
    </Layout>
);
