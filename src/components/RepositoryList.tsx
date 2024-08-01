import React, { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import '../styles/RepositoryList.css';

interface Repository {
  id: number;
  name: string;
  language:string;
}

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {

  return (
    <div className="repository-list">
        {repositories.map((repo) => (
          <RepositoryItem
            key={repo.id}
            name={repo.name}
            language={repo.language || 'N/A'}
          />
        ))}
      </div>
  );
};

export default RepositoryList;
