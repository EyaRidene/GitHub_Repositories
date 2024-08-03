import '../styles/SearchBar.css';
import React, { useState } from 'react';

/**
 * Props for the SearchBar component.
 * 
 * @interface SearchBarProps
 * @property {function} onSearch - Callback function to be invoked when a search is performed.
 * Takes the GitHub username as an argument.
 */

interface SearchBarProps {
  onSearch: (userName: string) => void;
}

/**
 * A functional component that renders a search bar for entering a GitHub username.
 * Provides a button to trigger the search and handles pressing the Enter key to perform the search.
 * 
 * @param {SearchBarProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered search bar element.
 */

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [userName, setUserName] = useState('');

   /**
   * Invokes the onSearch callback with the current username.
   */

  const handleSearch = () => {
    onSearch(userName);
  };

    /**
   * Handles key down events on the input field.
   * Triggers the search when the Enter key is pressed.
   * 
   * @param {React.KeyboardEvent<HTMLInputElement>} event - The key down event.
   */

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