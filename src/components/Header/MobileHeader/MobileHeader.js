import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { ClickableLogo } from '../../Logo/Logo';
import './MobileHeader.scss';

const MobileHeader = () => {
  return (
    <div className="mobileHeader">
      <ClickableLogo />
      <HamburgerMenu />
    </div>
  );
};

export default MobileHeader;
