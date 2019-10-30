import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../components/Logo';
import Layout from '../components/Layout';

const ComingSoonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    bottom: 0;
    top: 1rem;
    
    text-align: center;
    justify-content: center;
    font-family: 'Lexend Deca', sans-serif;
    color: white;
`;

const ComingSoon = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1rem;
    align-content: center;
`;

const Headline = styled.h1`
    font-size: 10rem;
    margin: 1rem;

    @media only screen and (max-width: 48em) {
        font-size: 6rem;
    }
`;

const Subheading = styled.p`
    font-size: 4rem;
    margin: 1rem;

    @media only screen and (max-width: 48em) {
        font-size: 2rem;
    }
`;

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
    }
`;

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

export default () => (
    <Layout navigable={false} contentPadding={"0"}>
        <Background />
        <ComingSoonWrapper>
            <Logo />
            <ComingSoon>
                <Headline>COMING SOON</Headline>
                <Subheading>Dev Ghina is working on it 🛠</Subheading>
            </ComingSoon>
        </ComingSoonWrapper>
    </Layout>
);
