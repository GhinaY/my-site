import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuWrapper = styled.div`
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;

    z-index: 1;
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    position: fixed;
    text-align: left;
    height: 100vh;
    top: 0;
    margin-top: 0;

    left: 100%;
    padding-left: 0;
    padding-top: 7rem;

    background: white;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    ${({ isOpen }) =>
        isOpen &&
        css`
            transform: scale(1, 1) translateX(-100%);
            opacity: 1;
        `};
`;

const MenuListItem = styled.li`
    color: black;
    transition: color 0.3s ease;
    width: 100%
    font-weight: 400;
`;

const MenuToggleButton = styled.button`
    all: unset;
    position: relative;
    font-size: 2rem;
    width: 30px;
    height: 30px;
    z-index: 1;

    ${({ isOpen }) =>
        isOpen &&
        css`
            color: black;
        `};
`;

const BlurBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    transition: 0.6s;
    opacity: 0;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    ${({ isOpen }) =>
        isOpen &&
        css`
            transform: translateX(-100%);
            opacity: 1;
        `};
`;

const HamburgerMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <BlurBackdrop isOpen={isOpen} />
            <MenuWrapper>
                <MenuToggleButton isOpen={isOpen} onClick={toggle}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </MenuToggleButton>
                <MenuList isOpen={isOpen}>
                    {children.map((item, i) => (
                        <MenuListItem key={i}>{item}</MenuListItem>
                    ))}
                </MenuList>
            </MenuWrapper>
        </>
    );
};

export default HamburgerMenu;
