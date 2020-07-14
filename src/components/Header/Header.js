import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import classNames from "classnames";
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import "./Header.scss";
import "./MobileHeader/MobileHeader.scss";

const classnameSelector = (subClassName) => {
    return classNames({
        'genericNavLink': true,
        [subClassName]: true,
    });
}

export const MenuItem = ({ subClassName, itemName }) => (
    <Link
        className={classnameSelector(subClassName)}
        activeClass="active"
        to={itemName}
        spy={true}
        smooth={true}
        offset={-200}
        duration={600}
    >
        {itemName}
    </Link>
);


const Header = () => {
    const menuItems = [
        'About',
        'Skills',
        'Resume',
        'Contact'
    ]

    return (
        <>
            <DesktopHeader menuItems={menuItems} />
            <MobileHeader menuItems={menuItems} />
        </>
    );
}

export default Header;
