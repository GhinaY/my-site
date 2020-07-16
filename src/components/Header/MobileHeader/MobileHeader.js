import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { ClickableLogo } from '../../Logo/Logo';
import { MenuItem } from '../Header';
import './MobileHeader.scss';

const menuItems = {
    About: -100,
    Skills: 50,
    Resume: 50,
    Contact: 50
};

export default () => {

    const menuList = Object.keys(menuItems).map(function(key) {
        return <MenuItem subClassName='mobileMenuItem' key={key} itemName={key} offset={menuItems[key]} />
    });

    return (
    <div className="mobileHeader">
        <ClickableLogo />
        <HamburgerMenu>
            {menuList}
        </HamburgerMenu>
    </div>
)};
