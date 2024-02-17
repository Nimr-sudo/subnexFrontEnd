import React from 'react';
import Layout from '../common/Layout';
import SlidingPage from './SlidingPage';
import UserContext from './UserContext';

function VendorDashboard() {
  const { userInfo } = React.useContext(UserContext);
  console.log('vendordashbaord', userInfo)

  return (
    <Layout>
      <SlidingPage userInfo={userInfo} />
    </Layout>
  );
}

export default VendorDashboard;
