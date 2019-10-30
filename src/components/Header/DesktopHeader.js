import React from 'react';
import styled from 'styled-components';
import { ClickableLogo } from '../Logo';
import { NavLink } from './Header';

const DesktopHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
    background: black;

    ${props => props.theme.mobileBreakpoint} {
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
    padding: 0.5rem 1rem;

    &.active {
        color: black;
        background-color: white;
        font-weight: 800;
    }

    &:not(.active):hover {
        color: black;
        background-color: rgba(255, 255, 255, 0.6);
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
