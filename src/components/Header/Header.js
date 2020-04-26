import React from 'react';
import Link from 'gatsby-link';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';

const isActive = className => ({ isCurrent }) => ({
    className: `${className} ${isCurrent ? 'active' : ''}`,
});

export const NavLink = ({ className, ...props }) => (
    <Link className="genericNavLink" getProps={isActive(className)} {...props} />
);

const Header = () => (
    <>
        <DesktopHeader />
        <MobileHeader />
    </>
);

export default Header;
