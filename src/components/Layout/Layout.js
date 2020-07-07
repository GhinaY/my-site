import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

export default ({ children, navigable = true }) => (
    <>
        {navigable && <Header />}
        <body className='layout' >{children}</body>
        {navigable && <Footer />}
    </>
);
