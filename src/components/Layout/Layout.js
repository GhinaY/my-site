import React from 'react';
import Header from '../Header/Header';
import './Layout.scss';

export default ({ children, navigable = true }) => (
    <>
        {navigable && <Header />}
        <body className='layout' >{children}</body>
    </>
);
