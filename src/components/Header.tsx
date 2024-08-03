import React from 'react';
import '../styles/Header.css';
import SearchBar from './SearchBar';

/**
 * Props for the Header component.
 * 
 * @interface HeaderProps
 * @property {number} repositoryCount - The number of repositories.
 * @property {number} stars - The number of stars.
 */

interface HeaderProps {
  repositoryCount: number;
  stars: number;
  onSearch: (userName: string) => void; 
}

/**
 * A functional component that renders the header section of the application.
 * Displays links to GitHub with counts for repositories and stars.
 * 
 * @param {HeaderProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered header element.
 */

const Header: React.FC <HeaderProps>= ({ repositoryCount, stars, onSearch }) => {
  return (
    <header className="header">
      <img src="GitHub-Logo.png" alt="logo" className='logo' />
      <nav className="nav-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-book-open"></i> Overview
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='repositories'>
          <i className="fa-regular fa-bookmark"></i> Repositories {repositoryCount > 0 && <span className="badge"> {repositoryCount}</span>}
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-project-diagram"></i> Projects
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-star"></i> Stars {stars > 0 && <span className="badge"> {stars}</span>}
        </a>
      </nav>
      <div className="search-bar">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;