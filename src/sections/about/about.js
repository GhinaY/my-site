import React from 'react';
import aboutPic from '../../../assets/tulip_field.jpg';
import wordCloud from '../../components/WordCloud/WordCloud';
import './about.scss';
import '../../styles/home.scss';

export default (
    <>
        <div className='aboutSection'>
            <img className='aboutPicture' src={aboutPic} alt='Me in a tulip field' />
            <div className='aboutText'>
                <h3 className='sectionSubtitle'>Who even am I?</h3>
                <p className='sectionBody'>
                    I'm a Melbourne-based software engineer and developer with a wild imagination, 
                    a deep sense of curiosity and many passions.
                </p>
            </div>
        </div>
        {wordCloud}
    </>
);