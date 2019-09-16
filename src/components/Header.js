import React from 'react';
import Link from 'gatsby-link'
import { ClickableLogo } from './Logo'
import styled from 'styled-components'

const isActive = className => ({ isCurrent }) => ({
    className: `${className} ${isCurrent ? 'active' : ''}`
});

const ExactNavLink = ({ className, ...props }) => (
    <Link getProps={isActive(className)} {...props} />
);

const NavLink = styled(ExactNavLink)`
    color: white;
    text-decoration: none;
    
    &.active {
        text-shadow:1px 1px 12px #fff, 1px 1px 15px #ccc;
    }
    
    &:not(.active):hover {
        text-decoration-line: underline;
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
    padding-top: 20px;
`;

const Header = () => (
    <HeaderWrapper>
        <NavLinksWrapper>
            <NavLink to={'/personal'}>Personal</NavLink>
            <NavLink to={'/professional'}>Professional</NavLink>
        </NavLinksWrapper>
        <ClickableLogo/>
        <NavLinksWrapper>
            <NavLink to={'/projects'}>Projects</NavLink>
            <NavLink to={'/ping'}>Ping me</NavLink>
        </NavLinksWrapper>
    </HeaderWrapper>
)

export default Header
