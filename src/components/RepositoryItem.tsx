import React from 'react';
import '../styles/RepositoryItem.css';

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

const RepositoryItem: React.FC<RepositoryItemProps> = ({ name, language, html_url, description, stars, license, visibility, updated_at }) => {

  return (
    <div className="repository-item">
      <h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">{name}</a>
        <span className="visibility">{visibility}</span>
        <button className="star-button">
          <i className="fa-regular fa-star"></i> Star
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
