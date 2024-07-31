// src/components/SearchBar.tsx
import '../styles/SearchBar.css';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (userName: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [userName, setUserName] = useState('');

  const handleSearch = () => {
    onSearch(userName);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className='search-input'
      />
      <button onClick={handleSearch} className='search-button'>Search</button>
    </div>
  );
};

export default SearchBar;