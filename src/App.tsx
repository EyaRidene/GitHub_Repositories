import React, { useState } from 'react';
import Header from './components/Header';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import RepositoryList from './components/RepositoryList';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface Repository {
  id: number;
  name: string;
  language: string | null;
}

const App: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [profileData, setProfileData] = useState<any>(null);
  
  const handleSearch = async (userName: string) => {
  // fetch the repositories of the user
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}/repos`);
    setRepositories(response.data);
    const profileResponse = await axios.get(`https://api.github.com/users/${userName}`);
    setProfileData(profileResponse.data);
  } catch (error) {
    console.error('Error fetching repositories', error);
  }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch}/>
      <Header/>
      {profileData && (
        <div className="container">
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
          <RepositoryList
            repositories={repositories.map((repo: any) => ({
              id: repo.id,
              name: repo.name,
              language: repo.language,
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default App;
