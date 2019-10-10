import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

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

const Header = () => (
    <>
        <DesktopHeader />
        <MobileHeader />
    </>
);

export default Header;
