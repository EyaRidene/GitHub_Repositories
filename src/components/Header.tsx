import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  repositoryCount: number;
  stars: number;
}

const Header: React.FC <HeaderProps>= ({ repositoryCount, stars }) => {
  return (
    <header className="header">
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
          <i className="fa-solid fa-cubes"></i> Packages 
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-star"></i> Stars {stars > 0 && <span className="badge"> {stars}</span>}
        </a>
      </header>
  );
};

export default Header;