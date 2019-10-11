import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';
import { ClickableLogo } from '../Logo';
import { NavLink } from './Header';

const MobileHeader = styled.div`
    display: none;

    @media only screen and (max-width: 48em) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1.4rem 2rem;
    }
`;

const MobileNavLink = styled(props => <NavLink {...props} />)`
    padding: 1rem 4rem;
    display: block;
    color: black;

    &.active {
        color: white;
        background-color: black;
    }
`;

export default () => (
    <MobileHeader>
        <ClickableLogo />
        <HamburgerMenu>
            <MobileNavLink to={'/personal/'}>Personal</MobileNavLink>
            <MobileNavLink to={'/professional/'}>Professional</MobileNavLink>
            <MobileNavLink to={'/projects/'}>Projects</MobileNavLink>
            <MobileNavLink to={'/ping/'}>Ping me</MobileNavLink>
        </HamburgerMenu>
    </MobileHeader>
);
