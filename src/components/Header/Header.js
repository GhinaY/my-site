import React from 'react';
import { Link } from 'react-scroll';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import classNames from 'classnames';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import './Header.scss';
import './MobileHeader/MobileHeader.scss';

const classnameSelector = (subClassName) => {
  return classNames({
    genericNavLink: true,
    [subClassName]: true,
  });
};

export const MenuItem = ({ subClassName, itemName, offset = 0 }) => (
  <Link
    className={classnameSelector(subClassName)}
    activeClass="active"
    to={itemName}
    spy={true}
    smooth={true}
    offset={offset}
    duration={600}
  >
    {itemName}
  </Link>
);

const Header = () => {
  const breakpoints = useBreakpoint();
  const isMobileView = breakpoints.sm;
  
  return (
    <>
      {!isMobileView && <DesktopHeader />}
      {isMobileView && <MobileHeader />}
    </>
  );
};

export default Header;
