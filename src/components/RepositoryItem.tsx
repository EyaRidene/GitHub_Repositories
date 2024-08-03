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

const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  TypeScript: '#2b7489',
};

/**
 * A functional component that displays a single repository item.
 * Includes repository name, description, and additional details like language,
 * stars, license, and visibility. Provides a button to star/unstar the repository.
 * 
 * @param {RepositoryItemProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered repository item element.
 */

const timeAgo = (dateString: string) => {
  const now = new Date();
  const updatedDate = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - updatedDate.getTime()) / 1000);
  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return `Updated ${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
};

const RepositoryItem: React.FC<RepositoryItemProps> = ({ name, language, html_url, description, stars, license, visibility, updated_at }) => {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  const languageColor = language ? languageColors[language] || '#ddd' : '#ddd';
  
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
        <div className="language">
          <span className="language-dot" style={{ backgroundColor: languageColor }}></span>
          <p>{language || 'N/A'}</p>
        </div>
        {stars >= 0 && <p>{stars} <i className="fa-solid fa-star"></i></p>}
        {license && <p><i className="fa-solid fa-scale-balanced"></i> {license}</p>}
        <p>{timeAgo(updated_at)}</p>
      </div>
    </div>
  );
};

export default RepositoryItem;
