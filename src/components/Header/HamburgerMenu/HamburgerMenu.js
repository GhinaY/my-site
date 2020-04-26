import React, { useState } from 'react';
import classNames from "classnames";
import { CollapseReverse } from 'react-burgers';
import "./HamburgerMenu.scss"

const HamburgerMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    let activeSelector = (classname) => {
        return classNames({ 
            [classname]: true, 
            [`${classname}-active`]: isOpen,
        }); 
    }
    return (
        <>
            <div className={activeSelector("blurBackdrop")} />
            <div className="menuWrapper">
                <CollapseReverse className={activeSelector("menuToggleButton")} active={isOpen} onClick={toggle} />
                <ul className={activeSelector("menuList")}>
                    {children.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default HamburgerMenu;
