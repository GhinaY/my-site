import React from 'react';
import { ClickableLogo } from '../../Logo/Logo';
import { NavLink } from '../Header';
import '../Header.scss'
import './DesktopHeader.scss'

export default () => (
    <div className="desktopHeader">
        <ClickableLogo />
        <nav className="desktopNavItems">
            <NavLink className="genericNavLink desktopNavLink" to={'/home/'}>About</NavLink>
            <NavLink className="genericNavLink desktopNavLink" to={'/home/'}>Career</NavLink>
            <NavLink className="genericNavLink desktopNavLink" to={'/home/'}>Projects</NavLink>
            <NavLink className="genericNavLink desktopNavLink" to={'/home/'}>Contact</NavLink>
        </nav>
    </div>
);
