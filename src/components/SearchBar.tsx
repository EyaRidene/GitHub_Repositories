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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        className='search-input'
      />
      <button onClick={handleSearch} className='search-button'>Search</button>
    </div>
  );
};

export default SearchBar;