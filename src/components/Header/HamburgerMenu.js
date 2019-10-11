import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { CollapseReverse } from 'react-burgers';

const MenuWrapper = styled.div`
    position: absolute;
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
    padding-top: 7rem;
    padding-left: 0;
    left: 100%;

    background: white;
    list-style-type: none;

    transform-origin: 0% 0%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    ${({ isOpen }) =>
        isOpen &&
        css`
            transform: scale(1, 1) translateX(-100%);
        `};
`;

const MenuToggleButton = styled(CollapseReverse)`
    position: relative;
    z-index: 1;

    .BurgerBox {
        width: 2.7rem;
    }

    .BurgerInner,
    .BurgerInner:before,
    .BurgerInner:after {
        background-color: white;
        height: 0.3rem;
        border-radius: 1rem;
    }

    ${({ active }) =>
        active &&
        css`
            .BurgerInner,
            .BurgerInner::before,
            .BurgerInner::after {
                background-color: black;
            }
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
                <MenuToggleButton active={isOpen} onClick={toggle} />
                <MenuList isOpen={isOpen}>
                    {children.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </MenuList>
            </MenuWrapper>
        </>
    );
};

export default HamburgerMenu;
