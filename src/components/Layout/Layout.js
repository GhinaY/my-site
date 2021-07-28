import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

export default ({ children, navigable = true }) => (
  <body>
    {navigable && <Header />}
    <div className="content">{children}</div>
    {navigable && <Footer />}
  </body>
);
