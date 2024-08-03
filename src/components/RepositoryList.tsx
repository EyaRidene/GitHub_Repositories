import React, { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import '../styles/RepositoryList.css';


/**
 * Props for the RepositoryList component.
 * 
 * @interface Repository
 * @property {number} id - The unique identifier of the repository.
 * @property {string} name - The name of the repository.
 * @property {string | null} language - The programming language of the repository.
 * @property {string} html_url - The URL of the repository.
 * @property {string | null} description - The description of the repository.
 * @property {number} stars - The number of stars the repository has.
 * @property {string | null} license - The license type of the repository.
 * @property {string} visibility - The visibility of the repository (e.g., public, private).
 * @property {string} updated_at - The last updated timestamp of the repository.
 */

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

/**
 * Props for the RepositoryList component.
 * 
 * @interface RepositoryListProps
 * @property {Repository[]} repositories - The list of repositories to display.
 */

interface RepositoryListProps {
  repositories: Repository[];
}

/**
 * A functional component that displays a list of repositories.
 * Includes filtering, sorting, and pagination features.
 * 
 * @param {RepositoryListProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered list of repositories.
 */

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {

  const [filter, setFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

   // Calculate paginated repositories
   const startIndex = (currentPage - 1) * itemsPerPage;
   const paginatedRepos = filteredRepos.slice(startIndex, startIndex + itemsPerPage);
   const totalPages = Math.ceil(filteredRepos.length / itemsPerPage);
 
   const handlePageChange = (newPage: number) => {
     if (newPage >= 1 && newPage <= totalPages) {
       setCurrentPage(newPage);
     }
   };

  return (
    <div className="repository-list">
      <div className="filter-container">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Find Repositories..."
        />
        <select onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
          <option value="">Type</option>
          {allTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
        <select onChange={(e) => setLanguageFilter(e.target.value)} value={languageFilter}>
          <option value="">Language</option>
          {allLanguages.map((lang, index) => (
            <option key={index} value={lang}>{lang}</option>
          ))}
        </select>
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="">Sort</option>
          <option value="stars">Stars</option>
          <option value="name">Name</option>
        </select>
        <button className='new-button'><i className="fa-regular fa-bookmark"></i>New</button>
      </div>
      <div className="repository-list">
        {paginatedRepos.map((repo) => (
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
      <div className="pagination-controls">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RepositoryList;
