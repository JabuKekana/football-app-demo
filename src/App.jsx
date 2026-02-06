import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Common/Navbar.jsx"
import { ScrollToHash } from "./Components/Common/ScrollToHash.jsx";
import { Header } from "./Components/Home/Header.jsx";
import { CommunityPreview } from "./Components/Home/CommunityPreview.jsx";
import { Features } from "./Components/Home/Features.jsx";
import { About } from "./Components/Home/About.jsx";
import { Services } from "./Components/Home/Services.jsx";
import { Contact } from "./Components/Home/Contact.jsx";

import { FAQ } from "./Components/Info/FAQ.jsx";
import { Terms } from "./Components/Info/Terms.jsx";
import { Privacy } from "./Components/Info/Privacy.jsx";

import { DevPages } from "./Components/Dev/DevPages.jsx";

// Auth
import { AuthSelection } from "./Components/Auth/AuthSelection.jsx";
import { RegisterBorrower } from "./Components/Auth/RegisterBorrower.jsx";
import { RegisterInvestor } from "./Components/Auth/RegisterInvestor.jsx";
import { Login } from "./Components/Auth/Login.jsx";
import { ForgotPassword } from "./Components/Auth/ForgotPassword.jsx";
import { ResetPassword } from "./Components/Auth/ResetPassword.jsx";

// Borrower
import { BorrowerDashboard } from "./Components/Borrower/BorrowerDashboard.jsx";
import { BorrowerProfile } from "./Components/Borrower/BorrowerProfile.jsx";
import { LoanApplication } from "./Components/Borrower/LoanApplication.jsx";

// Investor
import { InvestorMarketplace } from "./Components/Investor/InvestorMarketplace.jsx";
import { InvestorPortfolio } from "./Components/Investor/InvestorPortfolio.jsx";
import { InvestorProfile } from "./Components/Investor/InvestorProfile.jsx";
import { InvestmentCommitment } from "./Components/Investor/InvestmentCommitment.jsx";

// Messaging + KYC
import { MessagingCenter } from "./Components/Messages/MessagingCenter.jsx";
import { KycVerification } from "./Components/KYC/KycVerification.jsx";

// Admin
import { AdminReviewLoan } from "./Components/Admin/AdminReviewLoan.jsx";
import { UserManagement } from "./Components/Admin/UserManagement.jsx";
import { PlatformSettings } from "./Components/Admin/PlatformSettings.jsx";

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
