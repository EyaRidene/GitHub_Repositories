import React, { useState } from 'react';
import '../styles/RepositoryItem.css';


/**
 * Props for the RepositoryItem component.
 * 
 * @interface RepositoryItemProps
 * @property {string} name - The name of the repository.
 * @property {string | null} language - The programming language of the repository.
 * @property {string} html_url - The URL of the repository.
 * @property {string | null} description - The description of the repository.
 * @property {number} stars - The number of stars the repository has.
 * @property {string | null} license - The license type of the repository.
 * @property {string} visibility - The visibility of the repository (e.g., public, private).
 * @property {string} updated_at - The last updated timestamp of the repository.
 */

interface RepositoryItemProps {
  name: string;
  language: string | null;
  html_url: string;
  description: string | null;
  stars: number;
  license: string | null;
  visibility: string;
  updated_at: string;
}

/**
 * A functional component that displays a single repository item.
 * Includes repository name, description, and additional details like language,
 * stars, license, and visibility. Provides a button to star/unstar the repository.
 * 
 * @param {RepositoryItemProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered repository item element.
 */

const RepositoryItem: React.FC<RepositoryItemProps> = ({ name, language, html_url, description, stars, license, visibility, updated_at }) => {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };
  
  return (
    <div className="repository-item">
      <h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">{name}</a>
        <span className="visibility">{visibility}</span>
        <button
          className={`star-button ${isStarred ? 'active' : ''}`}
          onClick={handleStarClick}
        >
          <i className="fa-solid fa-star"></i>
          {isStarred ? <span>Starred</span> : <span>Star</span>}
        </button>

      </h3>
      {description && <p className='description'>{description}</p>}
      <div className="info">
          <p>{language || 'N/A'}</p>
        {stars >= 0 && <p>{stars} <i className="fa-solid fa-star"></i></p>}
        {license && <p><i className="fa-solid fa-scale-balanced"></i> {license}</p>}
      </div>
    </div>
  );
};

export default RepositoryItem;
