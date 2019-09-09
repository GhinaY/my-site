import React from 'react';
import styled from 'styled-components'
import Logo from '../components/Logo'

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
`;

export default () => (
    <ComingSoonWrapper>
        <Logo />
        <ComingSoon>
            <h1 style={{ fontSize: `100px`, margin: '0'}}>COMING SOON</h1>
            <p style={{ fontSize: `40px`, margin: '0' }}>Dev Ghina is working on it 🛠</p>
        </ComingSoon>
    </ComingSoonWrapper>
)
