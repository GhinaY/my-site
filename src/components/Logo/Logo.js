import React from 'react';
import Link from 'gatsby-link';
import "./Logo.scss"

const Logo = ({ color }) => (
    <div className="logoText" style={{ color: color }}>
        Ghina Yashar
    </div>
)

// Clickable Logo directing to Index
export const ClickableLogo = ({ color }) => (
    <Link className="logoLink" to={'/'}>
        <Logo color={color} />
    </Link>
);

export default Logo;
