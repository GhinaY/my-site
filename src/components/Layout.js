import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header/Header';

const theme = {
    mobileBreakpoint: '@media only screen and (max-width: 48em)',
};

export default ({ children, navigable = true, contentPadding = '0 3rem'}) => (
    <ThemeProvider theme={theme}>
        <>
            {navigable && <Header />}
            <body style={{ padding: contentPadding }}>{children}</body>
        </>
    </ThemeProvider>
);
