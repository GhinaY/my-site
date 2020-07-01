import React from 'react';
import { ClickableLogo } from '../../Logo/Logo';
import { NavLink } from '../Header';
import "../Header.scss"
import "./DesktopHeader.scss"

export default () => (
    <div className="desktopHeader">
        <nav className="desktopNavItems">
            <NavLink className="genericNavLink desktopNavLink" to={'/personal/'}>Personal</NavLink>
            <NavLink className="genericNavLink desktopNavLink" to={'/professional/'}>Professional</NavLink>
        </nav>
        <ClickableLogo />
        <nav className="desktopNavItems">
            <NavLink className="genericNavLink desktopNavLink" to={'/projects/'}>Projects</NavLink>
            <NavLink className="genericNavLink desktopNavLink" to={'/ping/'}>Ping me</NavLink>
        </nav>
    </div>
);
