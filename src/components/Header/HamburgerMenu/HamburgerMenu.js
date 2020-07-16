import React, { useState } from 'react';
import classNames from "classnames";
import { CollapseReverse } from 'react-burgers';
import { MenuItem } from '../Header';
import "./HamburgerMenu.scss"

const menuItems = {
    About: -100,
    Skills: 50,
    Resume: 50,
    Contact: 50
};

const HamburgerMenu = () => {
    if (typeof window !== 'undefined') {
        document.querySelectorAll('.hamburgerMenuItem').forEach(item => {
            item.addEventListener('click', event => {
                toggle()
            })
        })
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let activeSelector = (classname) => {
        return classNames({ 
            [classname]: true, 
            [`${classname}-active`]: isOpen,
        }); 
    };

    const menuList = Object.keys(menuItems).map(function(key) {
        return <MenuItem
                    subClassName='hamburgerMenuItem'
                    key={key}
                    itemName={key}
                    offset={menuItems[key]}
                />
    });

    return (
        <>
            <div className={activeSelector("blurBackdrop")} />
            <div className="menuWrapper">
                <CollapseReverse className={activeSelector("menuToggleButton")} active={isOpen} onClick={toggle} />
                <ul className={activeSelector("menuList")}>
                    {menuList.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default HamburgerMenu;
