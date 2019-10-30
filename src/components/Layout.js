import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header/Header';

const theme = {
    mobileBreakpoint: '@media only screen and (max-width: 48em)',
};

const Content = styled.body`
    padding: ${({ padding = '0 3rem' }) => padding};
`;

export default ({ children, navigable = true, contentPadding }) => (
    <ThemeProvider theme={theme}>
        <>
            {navigable && <Header />}
            <Content padding={contentPadding}>{children}</Content>
        </>
    </ThemeProvider>
);
