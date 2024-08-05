import React, { useState } from 'react';
import '../Styles/EditProfile.css';

const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState('default-profile-pic.jpg'); // Default profile picture
  const [email, setEmail] = useState('example@example.com');
  const [contactNo, setContactNo] = useState('123-456-7890');
  const [password, setPassword] = useState('');

  const handleProfilePictureChange = (e) => {
    // Simulate changing profile picture
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Profile updated successfully!');
  };

  return (
    <div className="edit-profile">
      <h1>Edit Profile</h1>
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" />
        <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
        <button className="update-button" onClick={handleSubmit}>Update</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Change Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Change Contact Number</label>
          <input
            type="tel"
            id="contactNo"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Change Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
