import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout = ({ children, navigable = true }) => (
  <>
    {navigable && <Header />}
    <div className="content">{children}</div>
    {navigable && <Footer />}
  </>
);

export default Layout;
