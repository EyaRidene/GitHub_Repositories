import React from 'react';
import '../styles/Profile.css'; 

/**
 * Props for the Profile component.
 * 
 * @interface ProfileProps
 * @property {string} avatarUrl - The URL of the user's avatar image.
 * @property {string} name - The user's name.
 * @property {string} bio - The user's bio.
 * @property {string} [location] - Optional location of the user.
 * @property {number} publicRepos - The number of public repositories.
 * @property {number} followers - The number of followers.
 * @property {number} following - The number of users the user is following.
 * @property {string} email - The user's email address.
 * @property {string} linkedin - The user's LinkedIn profile URL.
 */

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

/**
 * A functional component that displays user profile information.
 * Renders the user's avatar, name, bio, and optional details like location,
 * followers, following, email, and LinkedIn profile.
 * 
 * @param {ProfileProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered profile element.
 */

const Profile: React.FC<ProfileProps> = ({
  avatarUrl,
  name,
  bio,
  location,
  publicRepos,
  followers,
  following,
  email,
  linkedin
}) => {
  return (
    <div className="profile">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <h3 className="profile-name-second">{name}</h3>
      <p className="profile-bio">{bio}</p>
      <button className='follow-button'>Follow</button>
      {location && <p className="profile-location"><i className="fa-solid fa-location-dot"></i> {location}</p>}
      <p className="profile-followers"><i className="fa-solid fa-person"></i><span>{followers}</span> followers. <span>{following}</span> following</p>
      {email && <p className="profile-email"><i className="fa-solid fa-envelope"></i>Email: {email}</p>}
      {linkedin && <p className="profile-linkedin"><i className="fa-brands fa-linkedin"></i><a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>}
    </div>
  );
};

export default Profile;
