import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <ul>
        <li>ID: {user.id}</li>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        {/* Add more user details as needed */}
      </ul>
    </div>
  );
};

export default User;
