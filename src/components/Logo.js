import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'

const LogoText = styled.div`
    display: inline;
    font-family: 'Sacramento', cursive;
    font-size: 4.8rem;
    font-weight: normal;
    padding: 2rem;
    color: white;

    @media only screen and (max-width: 48em) {
        font-size: 3.2rem;
    }
`;


const Logo = () => (
    <LogoText>Ghina Yashar</LogoText>
);


// Clickable Logo directing to Index

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const ClickableLogo = () => (
    <StyledLink to={'/'}>
        <Logo/>
    </StyledLink>
);

export default Logo