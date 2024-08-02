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

  const [filter, setFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  const allLanguages = ['JavaScript', 'Python', 'Java', 'TypeScript', 'Ruby', 'Go', 'PHP', 'C++', 'C#', 'HTML', 'CSS'];
  const allTypes = ['Public', 'Private', 'Sources', 'Forks', 'Archived', 'Can be sponsored', 'Mirrors', 'Templates'];

  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(filter.toLowerCase()) &&
    (languageFilter ? repo.language === languageFilter : true) &&
    (typeFilter ? repo.visibility === typeFilter : true)
  ).sort((a, b) => {
    if (sortOption === 'stars') {
      return b.stars - a.stars;
    } else if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
  return (
    <div className="repository-list">
      <div className="filter-container">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Find Repositories..."
        />
        <select onChange={(e) => setLanguageFilter(e.target.value)} value={languageFilter}>
          <option value="">Language</option>
          {allLanguages.map((lang, index) => (
            <option key={index} value={lang}>{lang}</option>
          ))}
        </select>
        <select onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
          <option value="">Type</option>
          {allTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="">Sort</option>
          <option value="stars">Stars</option>
          <option value="name">Name</option>
        </select>
        <button className='new-button'><i className="fa-regular fa-bookmark"></i>New</button>
      </div>
        {filteredRepos.map((repo) => (
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
