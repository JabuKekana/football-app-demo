import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Common/navigation";
import { ScrollToHash } from "./components/Common/ScrollToHash";
import { Header } from "./components/Home/header";
import { CommunityPreview } from "./components/Home/community-preview";
import { Features } from "./components/Home/features";
import { About } from "./components/Home/about";
import { Services } from "./components/Home/services";
import { Contact } from "./components/Home/contact";

import { FAQ } from "./components/Info/FAQ";
import { Terms } from "./components/Info/Terms";
import { Privacy } from "./components/Info/Privacy";

import { DevPages } from "./components/Dev/DevPages";

// Auth
import { AuthStart } from "./components/Auth/AuthStart";
import { AccountType } from "./components/Auth/AccountType";
import { RegisterBorrower } from "./components/Auth/RegisterBorrower";
import { RegisterInvestor } from "./components/Auth/RegisterInvestor";
import { Login } from "./components/Auth/Login";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { ResetPassword } from "./components/Auth/ResetPassword";

// Borrower
import { BorrowerDashboard } from "./components/Borrower/BorrowerDashboard";
import { BorrowerProfile } from "./components/Borrower/BorrowerProfile";
import { LoanApplication } from "./components/Borrower/LoanApplication";

// Investor
import { InvestorMarketplace } from "./components/Investor/InvestorMarketplace";
import { InvestorPortfolio } from "./components/Investor/InvestorPortfolio.jsx";
import { InvestorProfile } from "./components/Investor/InvestorProfile";
import { InvestmentCommitment } from "./components/Investor/InvestmentCommitment";

// Messaging + KYC
import { MessagingCenter } from "./components/Messages/MessagingCenter";
import { KycVerification } from "./components/KYC/KycVerification";

// Admin
import { AdminReviewLoan } from "./components/Admin/AdminReviewLoan";
import { UserManagement } from "./components/Admin/UserManagement";
import { PlatformSettings } from "./components/Admin/PlatformSettings";

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
        <Navigation />
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
          <Route path="/auth" element={<AuthStart />} />
          <Route path="/account-type" element={<AccountType />} />
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
