import React from 'react';
import Link from 'gatsby-link';
import { ClickableLogo } from './Logo';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';

const isActive = className => ({ isCurrent }) => ({
    className: `${className} ${isCurrent ? 'active' : ''}`,
});

const ExactNavLink = ({ className, ...props }) => (
    <Link getProps={isActive(className)} {...props} />
);

export const NavLink = styled(ExactNavLink)`
    text-decoration: none;
    font-size: 2.1rem;
`;

const DesktopNavLink = styled(NavLink)`
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

    const MobileNavLink = styled(NavLink)`
        padding: 1rem 4rem;
        display: block;
        color: black;
        
        &.active {
            color: white;
            background-color: black;
        }
    `;

const NavLinksWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-top: 3rem;
    overflow: auto;
`;

const DesktopHeader = styled.div`
    @media only screen and (max-width: 48em) {
        display: none;
    }
`;

const MobileHeader = styled.div`
    display: none;
    
    @media only screen and (max-width: 48em) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding 1rem;
        align-items: centre;
    }
`;

const Header = () => (
    <>
        <DesktopHeader>
            <HeaderWrapper>
                <NavLinksWrapper>
                    <DesktopNavLink to={'/personal/'}>Personal</DesktopNavLink>
                    <DesktopNavLink to={'/professional/'}>Professional</DesktopNavLink>
                </NavLinksWrapper>
                <ClickableLogo />
                <NavLinksWrapper>
                    <DesktopNavLink to={'/projects/'}>Projects</DesktopNavLink>
                    <DesktopNavLink to={'/ping/'}>Ping me</DesktopNavLink>
                </NavLinksWrapper>
            </HeaderWrapper>
        </DesktopHeader>
        <MobileHeader>
            <ClickableLogo />
            <HamburgerMenu>
                <MobileNavLink to={'/personal/'}>Personal</MobileNavLink>
                <MobileNavLink to={'/professional/'}>Professional</MobileNavLink>
                <MobileNavLink to={'/projects/'}>Projects</MobileNavLink>
                <MobileNavLink to={'/ping/'}>Ping me</MobileNavLink>
            </HamburgerMenu>
        </MobileHeader>
    </>
);

export default Header;
