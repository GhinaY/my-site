import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { ClickableLogo } from '../../Logo/Logo';
import { NavLink } from '../Header';
import "../Header.scss"
import "./MobileHeader.scss"

export default () => (
    <div className="mobileHeader">
        <ClickableLogo color={'black'} />
        <HamburgerMenu>
            <NavLink className="genericNavLink mobileNavLink" to={'/home/'}>About</NavLink>
            <NavLink className="genericNavLink mobileNavLink" to={'/home/'}>Career</NavLink>
            <NavLink className="genericNavLink mobileNavLink" to={'/home/'}>Projects</NavLink>
            <NavLink className="genericNavLink mobileNavLink" to={'/home/'}>Contact</NavLink>
        </HamburgerMenu>
    </div>
);
