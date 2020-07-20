import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className='background gradientColors' />
            <pre className='footerContent' >
                Made with <span  role="img" aria-label='love'>🤍</span> & React in Melbourne
            </pre>
        </div>
    );
}

export default Footer;