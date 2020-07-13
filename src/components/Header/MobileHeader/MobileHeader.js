import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { ClickableLogo } from '../../Logo/Logo';
import { MenuItem } from '../Header';
import './MobileHeader.scss';

export default ({ menuItems }) => {

    const menuList = menuItems.map(item =>
        <MenuItem key={item} subClassName="mobileMenuItem" itemName={item} />
    )

    return (
    <div className="mobileHeader">
        <ClickableLogo />
        <HamburgerMenu>
            {menuList}
        </HamburgerMenu>
    </div>
)};
