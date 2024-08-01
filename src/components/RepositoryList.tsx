import React, { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import '../styles/RepositoryList.css';

interface Repository {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
  description: string | null;
  stars: number;
  license: string | null;
  visibility: string;
  updated_at: string;
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
          html_url={repo.html_url}
          description={repo.description}
          stars={repo.stars}
          license={repo.license}
          visibility={repo.visibility}
          updated_at={repo.updated_at}
        />
        ))}
      </div>
  );
};

export default RepositoryList;
