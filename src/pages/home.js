import React from 'react';
import ReactMarkdown from "react-markdown";
import Layout from '../components/Layout/Layout';
import profilePic from '../../assets/profilePicture.jpg';
import '../styles/home.scss';

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
        {/* <ReactMarkdown source={text} /> */}
    </Layout>
);
