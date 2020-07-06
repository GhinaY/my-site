import React from 'react';
import ReactMarkdown from "react-markdown";
import Layout from '../components/Layout/Layout';
import Section from '../components/Section/Section';
import profilePic from '../../assets/profilePicture.jpg';
import '../styles/home.scss';

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

export default () => (
    <Layout>
        <div className='welcomeBlock'>
            <div className='gradientLine' />
            <div className='welcomeContents'>
                <div className='welcomeText'>
                    <p className='welcomeSmall'>Hi! I'm</p>
                    <h1 className='welcomeLarge'>G H I N A</h1>
                    <p className='welcomeSmall'>Developer | Plant enthusiast | Friend :)</p>
                    <p className='welcomeMedium'>Welcome to my site!</p>
                </div>
                <img className='profilePicture' src={profilePic} alt='profile' />
            </div>
            <div className='gradientLine' />
        </div>
        <Section id='About' content={aboutContent} />
    </Layout>
);
