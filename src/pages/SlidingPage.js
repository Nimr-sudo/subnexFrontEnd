// SlidingPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import SlidingTabs from '../components/SlidingTabs';
import UserContext from './UserContext';

function SlidingPage() {
  const { userInfo } = React.useContext(UserContext);
  return (
    <div style={{ marginTop: '50px' }}>
      <UserContext.Provider value={{ userInfo }}>
        <SlidingTabs />
      </UserContext.Provider>
    </div>
  );
}

export default SlidingPage;
