import React from 'react';
import styled from 'styled-components';
import { ClickableLogo } from '../Logo';
import { NavLink } from './Header';

const DesktopHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-top: 3rem;
    overflow: auto;

    @media only screen and (max-width: 48em) {
        display: none;
    }
`;

const DesktopNavItems = styled.nav`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`;

const DesktopNavLink = styled(props => <NavLink {...props} />)`
    color: white;
    font-weight: 800;
    padding-right: 0.5rem;
    padding-left: 0.5rem;

    &.active {
        color: black;
        mix-blend-mode: screen;
        background-color: white;
    }

    &:not(.active):hover {
        color: black;
        mix-blend-mode: screen;
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

export default () => (
    <DesktopHeader>
        <DesktopNavItems>
            <DesktopNavLink to={'/personal/'}>Personal</DesktopNavLink>
            <DesktopNavLink to={'/professional/'}>Professional</DesktopNavLink>
        </DesktopNavItems>
        <ClickableLogo />
        <DesktopNavItems>
            <DesktopNavLink to={'/projects/'}>Projects</DesktopNavLink>
            <DesktopNavLink to={'/ping/'}>Ping me</DesktopNavLink>
        </DesktopNavItems>
    </DesktopHeader>
);
