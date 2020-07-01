import React from 'react';
import Header from './Header/Header';

export default ({ children, navigable = true, contentPadding = '0 3rem'}) => (
    <>
        {navigable && <Header />}
        <body style={{ padding: contentPadding }}>{children}</body>
    </>
);
