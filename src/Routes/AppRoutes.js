import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendorsSignup from "../pages/VendorsSignup";
import RepairSignup from "../pages/RepairFacilitySignup";
import LandingPage from "../pages/LandingPage";
import CompletedJobs from "../pages/CompletedJobs";
import PlacedBid from "../pages/PlacedBid";
import ShopDashboard from "../pages/ShopDashboard";
import SlidingPage from "../pages/SlidingPage";
import VendorDashboard from "../pages/VendorDashboard";
import PostJob from "../pages/PostJob";
import PendingJobs from "../pages/PendingJobs";
import SecondSlidingPage from "../pages/SecondSlidingPage";
import LoginComponentPage from "../pages/LoginPage";
import Payment from "../pages/Payment";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginComponentPage />} />
        <Route path="/vendors-signup" element={<VendorsSignup />} />
        <Route path="/repair-signup" element={<RepairSignup />} />
        <Route path="/completed-jobs" element={<CompletedJobs />} />
        <Route path="/placed-bid" element={<PlacedBid />} />
        <Route path="/shop-dashboard" element={<ShopDashboard />} />
        <Route path="/sliding-page" element={<SlidingPage />} />
        <Route path="/s-sliding-page" element={<SecondSlidingPage />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/pending-jobs" element={<PendingJobs />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
