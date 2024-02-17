// ShopDashboard.jsx
import React from 'react';
import Layout from '../common/Layout';
import SecondSlidingPage from './SecondSlidingPage';
import UserContext from './UserContext';

function ShopDashboard() {
  const { shopInfo } = React.useContext(UserContext);

  return (
    <Layout>
      <SecondSlidingPage shopInfo={shopInfo} />
    </Layout>
  );
}

export default ShopDashboard;
