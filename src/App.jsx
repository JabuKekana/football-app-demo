import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Common/Navbar.jsx"
import { ScrollToHash } from "./components/Common/ScrollToHash.jsx";
import { Header } from "./components/Home/header.jsx";
import { CommunityPreview } from "./components/Home/CommunityPreview.jsx";
import { Features } from "./components/Home/features.jsx";
import { About } from "./components/Home/about.jsx";
import { Services } from "./components/Home/services.jsx";
import { Contact } from "./components/Home/contact.jsx";

import { FAQ } from "./components/Info/FAQ.jsx";
import { Terms } from "./components/Info/Terms.jsx";
import { Privacy } from "./components/Info/Privacy.jsx";

import { DevPages } from "./components/Dev/DevPages.jsx";

// Auth
import { AuthSelection } from "./components/Auth/AuthSelection.jsx";
import { RegisterBorrower } from "./components/Auth/RegisterBorrower.jsx";
import { RegisterInvestor } from "./components/Auth/RegisterInvestor.jsx";
import { Login } from "./components/Auth/Login.jsx";
import { ForgotPassword } from "./components/Auth/ForgotPassword.jsx";
import { ResetPassword } from "./components/Auth/ResetPassword.jsx";

// Borrower
import { BorrowerDashboard } from "./components/Borrower/BorrowerDashboard.jsx";
import { BorrowerProfile } from "./components/Borrower/BorrowerProfile.jsx";
import { LoanApplication } from "./components/Borrower/LoanApplication.jsx";

// Investor
import { InvestorMarketplace } from "./components/Investor/InvestorMarketplace.jsx";
import { InvestorPortfolio } from "./components/Investor/InvestorPortfolio.jsx";
import { InvestorProfile } from "./components/Investor/InvestorProfile.jsx";
import { InvestmentCommitment } from "./components/Investor/InvestmentCommitment.jsx";

// Messaging + KYC
import { MessagingCenter } from "./components/Messages/MessagingCenter.jsx";
import { KycVerification } from "./components/KYC/KycVerification.jsx";

// Admin
import { AdminReviewLoan } from "./components/Admin/AdminReviewLoan.jsx";
import { UserManagement } from "./components/Admin/UserManagement.jsx";
import { PlatformSettings } from "./components/Admin/PlatformSettings.jsx";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = ({ landingPageData }) => (
  <>
    <Header data={landingPageData.Header} />
    <CommunityPreview />
    <Features data={landingPageData.Features} />
    <About data={landingPageData.About} />
    <Services data={landingPageData.Services} />
    <Contact data={landingPageData.Contact} />
  </>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToHash />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home landingPageData={landingPageData} />} />

          {/* Dev index */}
          <Route path="/dev" element={<DevPages />} />

          {/* Info */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Auth */}
          <Route path="/auth-selection" element={<AuthSelection />} />
          <Route path="/register/borrower" element={<RegisterBorrower />} />
          <Route path="/register/investor" element={<RegisterInvestor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Borrower */}
          <Route path="/borrower/dashboard" element={<BorrowerDashboard />} />
          <Route path="/borrower/profile" element={<BorrowerProfile />} />
          <Route path="/borrower/loan-application" element={<LoanApplication />} />

          {/* Investor */}
          <Route path="/investor/marketplace" element={<InvestorMarketplace />} />
          <Route path="/investor/portfolio" element={<InvestorPortfolio />} />
          <Route path="/investor/profile" element={<InvestorProfile />} />
          <Route path="/investor/commitment" element={<InvestmentCommitment />} />

          {/* Messaging + KYC */}
          <Route path="/messages" element={<MessagingCenter />} />
          <Route path="/kyc" element={<KycVerification />} />

          {/* Admin */}
          <Route path="/admin/review-loan" element={<AdminReviewLoan />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/settings" element={<PlatformSettings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
