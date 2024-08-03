import React, { useState } from 'react';
import Header from './components/Header';
import axios from 'axios';
import './App.css';
import Profile from './components/Profile';
import RepositoryList from './components/RepositoryList';
import '@fortawesome/fontawesome-free/css/all.min.css';

/**
 * The main App component that renders the application.
 * Combines the Header, Profile, and RepositoryList components.
 * 
 * @returns {JSX.Element} The rendered application element.
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

const App: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [profileData, setProfileData] = useState<any>(null);
  const [totalStars, setTotalStars] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  
  const handleSearch = async (userName: string) => {
  // fetch the repositories of the user
  try {
      const reposResponse = await axios.get(`https://api.github.com/users/${userName}/repos`);
      setRepositories(reposResponse.data);
      setTotalStars(reposResponse.data.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0));
      const profileResponse = await axios.get(`https://api.github.com/users/${userName}`);
      setProfileData(profileResponse.data);
      setErrorMessage(false);
  } catch (error) {
    console.error('Error fetching repositories', error);
    setErrorMessage(true);
  }
  };

  return (
    <div className="App">
      <Header repositoryCount={repositories.length} stars={totalStars} onSearch={handleSearch}/>
      {errorMessage && <div className="error-message">User not found or error fetching data.</div>}
      {profileData && (
        <div className="container">
          <div className="profile-section">
          <Profile
            avatarUrl={profileData.avatar_url}
            name={profileData.name}
            bio={profileData.bio}
            location={profileData.location}
            publicRepos={profileData.public_repos}
            followers={profileData.followers}
            following={profileData.following}
            email={profileData.email}
            linkedin={profileData.blog}
          />
          </div>
          <div className="repository-list-section">
          <RepositoryList
            repositories={repositories.map((repo: any) => ({
              id: repo.id,
                name: repo.name,
                language: repo.language,
                html_url: repo.html_url,
                description: repo.description,
                stars: repo.stargazers_count,
                license: repo.license ? repo.license.name : null,
                visibility: repo.visibility,
                updated_at: repo.updated_at
            }))}
          />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
