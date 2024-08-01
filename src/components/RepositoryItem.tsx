import React from 'react';
import '../styles/RepositoryItem.css';

interface RepositoryItemProps {
  name: string;
  language: string | null;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ name, language }) => {

  return (
    <div className="repository-item">
      <h3>
        <a href="#" target="_blank" rel="noopener noreferrer">{name}</a>
      </h3>
      <div className="info">
        <div className="language">
          <p>{language || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
