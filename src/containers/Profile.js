import React from 'react';
import { Link } from 'react-router-dom';

const Profile = props => {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Profile;
