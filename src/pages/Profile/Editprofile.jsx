import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const EditProfile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    ...user,
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = { ...user, ...formData };
    delete updatedUser.password;

    setUser(updatedUser);
    navigate("/profile");
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h1>Edit Profile</h1>

        <form className="edit-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} />
          </label>

          <label>
            Email
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          {/*  Password */}
          <label>
            New Password
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </label>

          <label>
            Plan
            <select name="plan" value={formData.plan} onChange={handleChange}>
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </label>

          <button className="btn primary">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
