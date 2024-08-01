import React from 'react';
import '../styles/Profile.css'; 

interface ProfileProps {
  avatarUrl: string;
  name: string;
  bio: string;
  location?:string;
  publicRepos: number;
  followers:number;
  following:number;
  email:string;
  linkedin:string;
}

const Profile: React.FC<ProfileProps> = ({
  avatarUrl,
  name,
  bio
}) => {
  return (
    <div className="profile">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <h3 className="profile-name-second">{name}</h3>
      <p className="profile-bio">{bio}</p>
      <button className='follow-button'>Follow</button>
    </div>
  );
};

export default Profile;
