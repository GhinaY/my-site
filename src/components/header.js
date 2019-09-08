import React from 'react';
import Link from 'gatsby-link'
import Logo from './Logo'
import styled from 'styled-components'

const isActive = className => ({ isCurrent }) => ({
    className: className + (isCurrent  ? ` active `  : ``)
});

const ExactNavLink = ({ className, ...props }) => (
    <Link getProps={isActive(className)} {...props} />
);

const NavLink = styled(ExactNavLink)`
    color: white;
    text-decoration: none;
    
    &.active {
        text-shadow:1px 1px 12px #fff, 1px 1px 15px #ccc;
    }
    
    &:hover {
        text-decoration-line: underline;
    }
`;

const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
`;

class Header extends React.Component {
    render() {
      return (
        <NavBar>
            <Logo />
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </NavBar>
      );
   }
}

export default Header
