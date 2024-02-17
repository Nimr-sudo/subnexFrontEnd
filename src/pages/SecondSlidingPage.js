import React from 'react';
import Layout from '../common/Layout';
import SecondSlidingTabs from '../components/SecondSlidingTabs';
import UserContext from './UserContext';

function SecondSlidingPage() {
  const { shopInfo } = React.useContext(UserContext);

  return (
    <UserContext.Provider value={{ shopInfo }}>
      <SecondSlidingTabs />
      </UserContext.Provider>
  );
}

export default SecondSlidingPage;
