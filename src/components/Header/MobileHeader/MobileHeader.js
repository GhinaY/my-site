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
            <NavLink className="genericNavLink mobileNavLink" to={'/personal/'}>Personal</NavLink>
            <NavLink className="genericNavLink mobileNavLink" to={'/professional/'}>Professional</NavLink>
            <NavLink className="genericNavLink mobileNavLink" to={'/projects/'}>Projects</NavLink>
            <NavLink className="genericNavLink mobileNavLink" to={'/ping/'}>Ping me</NavLink>
        </HamburgerMenu>
    </div>
);
