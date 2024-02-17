import React from 'react';
import Navbar from '../common/Navbar';
import Banner from '../components/Banner/Banner';
import ChooseOpts from '../components/ChooseOpts/ChooseOpts';
import VendorMarketing from '../components/VendorMarketing';
import ConnectVendors from '../components/ConnectVendors';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <ChooseOpts/>
      <VendorMarketing />
      <ConnectVendors />
      <Footer/>
    </div>
  );
}

export default LandingPage;
