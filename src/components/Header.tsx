import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-book-open"></i> Overview
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='repositories'>
        <i className="fa-regular fa-bookmark"></i> Repositories
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-project-diagram"></i> Projects
        </a>
    </header>
  );
};

export default Header;