import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Profile.css";
import pro from "./profile.jpg";

const Profile = ({ user }) => {
  const [profileImage, setProfileImage] = useState(pro);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar-container">
            <img src={profileImage} alt="Profile" className="profile-avatar" />
            <input
              type="file"
              accept="image/*"
              id="profileImageInput"
              onChange={handleImageChange}
              hidden
            />
            <label htmlFor="profileImageInput" className="plus-icon">
              +
            </label>
          </div>

          <div className="profile-info">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>Plan: {user.plan}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="profile-stats">
          <div className="stat-box">
            <h3>0</h3>
            <p>Movies Watched</p>
          </div>
          <div className="stat-box">
            <h3>0</h3>
            <p>TV Shows</p>
          </div>
          <div className="stat-box">
            <h3>0</h3>
            <p>My List</p>
          </div>
        </div>

        {/* Watchlist */}
        <div className="watchlist">
          <h2>My Watchlist</h2>

          <div className="watchlist-grid">
            <div className="watch-card">Movie 1</div>
            <div className="watch-card">Movie 2</div>
            <div className="watch-card">Movie 3</div>
            <div className="watch-card">Movie 4</div>
            <div className="watch-card">Movie 5</div>
          </div>
        </div>

        {/* Edit btn */}
        <NavLink to="/profile/edit" className="btn primary">
          Edit Profile
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
