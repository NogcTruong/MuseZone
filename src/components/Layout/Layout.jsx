import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Player from './Player';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">{children}</div>
      </div>
      <Player />
    </div>
  );
};

export default Layout;