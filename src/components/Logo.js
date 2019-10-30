import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const LogoText = styled.div`
    display: inline;
    font-family: 'Sacramento', cursive;
    font-size: 4.8rem;
    font-weight: normal;
    color: ${({ color = 'white' }) => color};

    ${props => props.theme.mobileBreakpoint} {
        font-size: 3.2rem;
    }
`;

const Logo = ({ color }) => <LogoText color={color}>Ghina Yashar</LogoText>;

// Clickable Logo directing to Index

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const ClickableLogo = ({ color }) => (
    <StyledLink to={'/'}>
        <Logo color={color} />
    </StyledLink>
);

export default Logo;
