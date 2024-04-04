import React from 'react';
import './ProtectedPage.css';

const ProtectedPage = () => {
  return (
    <div className="protected-page-container">
      <h2>Welcome to the Protected Page</h2>
      <p>This page is only accessible to authenticated users.</p>
      {/*  */}
    </div>
  );
};
export default ProtectedPage;