import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';

const gradient = keyframes`
        25% {
            background-position: 0 100%
    }
        50% {
            background-position: 100% 100%
    }
        75% {
            background-position: 100% 0
    }
        100% {
            filter: hue-rotate(360deg)
}`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
    
    background: radial-gradient(#1b042b, #23233b, #377a80);
    background-size: 400% 200%;
    animation: ${gradient} 18s ease infinite;
    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
`;

export default ({ children, navigable = true }) => (
    <Fragment>
        <Background/>
        { navigable && <Header/> }
        { children }
    </Fragment>
);
