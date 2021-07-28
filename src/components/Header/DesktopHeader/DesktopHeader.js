import React from 'react';
import { ClickableLogo } from '../../Logo/Logo';
import { MenuItem } from '../Header';
import './DesktopHeader.scss';

const menuItems = {
  About: -180,
  Skills: -50,
  Resume: -50,
  Contact: -50,
};

export default () => {
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
      <nav className="desktopNavItems">{menuList}</nav>
    </div>
  );
};
