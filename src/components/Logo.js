import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'

const LogoText = styled.div`
    display: inline;
    font-family: 'Sacramento', cursive;
    font-size: 48px;
    padding: 20px;
    color: white;
`;


const Logo = () => (
    <LogoText>Ghina Yashar</LogoText>
)


// Clickable Logo directing to Index

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const ClickableLogo = () => (
    <StyledLink to={'/'}>
        <Logo/>
    </StyledLink>
)


export default Logo