import React from 'react';
import { ClickableLogo } from '../../Logo/Logo';
import { MenuItem } from '../Header';
import './DesktopHeader.scss';

export default ({ menuItems }) => {

    const menuList = menuItems.map(item =>
        <MenuItem subClassName="desktopMenuItem" itemName={item} />
    )

    return (
    <div className="desktopHeader">
        <ClickableLogo />
        <nav className="desktopNavItems">
            {menuList}
        </nav>
    </div>
)};
