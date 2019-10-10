import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Layout from '../components/Layout';

const ComingSoonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    width: 100%;
    font-family: 'Lexend Deca', sans-serif;
    color: white;
    text-align: center;
    justify-content: center;
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

export default () => (
    <Layout navigable={false}>
        <ComingSoonWrapper>
            <Logo />
            <ComingSoon>
                <Headline>COMING SOON</Headline>
                <Subheading>Dev Ghina is working on it 🛠</Subheading>
            </ComingSoon>
        </ComingSoonWrapper>
    </Layout>
)
