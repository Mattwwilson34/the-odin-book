import './SearchBar.css';
import React, { useState } from 'react';
import searchIcon from '../../assets/icons/search.svg';

const SearchBar = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className='Search_Container'>
      {!searchActive && (
        <img className='Search_Icon' src={searchIcon} alt='magnifying glass' />
      )}
      <input
        className='Search_Input'
        type='search'
        placeholder='search odinbook'
        onFocus={() => setSearchActive(true)}
        onBlur={() => setSearchActive(false)}
      />
    </div>
  );
};

export default SearchBar;
