import './SearchBar.css';
import React, { useState } from 'react';
import { magnifyingGlass } from '../../utils/icon-exports';

const SearchBar = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className='Search_Container'>
      {!searchActive && (
        <img
          className='Search_Icon'
          src={magnifyingGlass}
          alt='magnifying glass'
        />
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
