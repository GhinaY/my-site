import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';
import { ClickableLogo } from '../Logo';
import { NavLink } from './Header';

const MobileHeader = styled.div`
    display: none;

    ${props => props.theme.mobileBreakpoint} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 2.5rem;
    }
`;

const MobileNavLink = styled(props => <NavLink {...props} />)`
    padding: 1rem 4rem;
    display: block;
    color: black;

    &.active {
        color: black;
        background-color: white;
    }
`;

export default () => (
    <MobileHeader>
        <ClickableLogo color={'black'} />
        <HamburgerMenu>
            <MobileNavLink to={'/personal/'}>Personal</MobileNavLink>
            <MobileNavLink to={'/professional/'}>Professional</MobileNavLink>
            <MobileNavLink to={'/projects/'}>Projects</MobileNavLink>
            <MobileNavLink to={'/ping/'}>Ping me</MobileNavLink>
        </HamburgerMenu>
    </MobileHeader>
);
