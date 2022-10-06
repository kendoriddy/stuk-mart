import React from 'react';
import '../css/header.css';
import Search from './Search';

const Header = () => (
  <header>
    <div className="navbar">
      <h3>Stuk-Mart</h3>
    </div>
    <Search />
  </header>
);

export default Header;
