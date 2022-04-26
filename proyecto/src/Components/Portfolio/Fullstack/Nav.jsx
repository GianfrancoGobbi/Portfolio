import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='navbar'>
      <SearchBar onSearch={onSearch}>

      </SearchBar>
    </div>
  );
};

export default Nav;
