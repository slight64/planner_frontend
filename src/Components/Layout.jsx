import React from 'react';
import Nav from './Header/Nav';
import './layout.scss';
export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      {children}
    </div>
  );
};
