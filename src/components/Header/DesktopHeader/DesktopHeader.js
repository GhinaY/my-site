import React from 'react';
import { ClickableLogo } from '../../Logo/Logo';
import ThemeToggleButton from '../../ThemeToggleButton/ThemeToggleButton';
import { MenuItem } from '../Header';
import './DesktopHeader.scss';

const menuItems = {
  About: -180,
  Skills: -50,
  Resume: -50,
  Contact: -50,
};

const DesktopHeader = () => {
  const menuList = Object.keys(menuItems).map(function (key) {
    return (
      <MenuItem
        subClassName="desktopMenuItem"
        key={key}
        itemName={key}
        offset={menuItems[key]}
      />
    );
  });

  return (
    <div className="desktopHeader">
      <ClickableLogo />
      <nav className="desktopNavItems">
        {menuList}
        <ThemeToggleButton />
      </nav>
    </div>
  );
};

export default DesktopHeader;
