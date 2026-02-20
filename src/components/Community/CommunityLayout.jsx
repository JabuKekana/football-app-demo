import React, { useState, createContext, useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles/community.css";

// Mock auth context (replace with real auth later)
const CommunityAuthContext = createContext();

export const useCommunityAuth = () => useContext(CommunityAuthContext);

export const CommunityLayout = () => {
  const location = useLocation();
  const [currentUser] = useState({
    id: 1,
    name: "Sarah M.",
    username: "@sarah_finance",
    avatar: "https://i.pravatar.cc/150?u=1",
    reputation: 1240,
    role: "Financial Analyst",
    joined: "Jan 2025",
    badges: ["Top Contributor", "Funding Expert"]
  });

  const [notifications, setNotifications] = useState(3);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const topics = [
    { id: 1, name: "Funding Tips", icon: "fa-money", count: 234 },
    { id: 2, name: "Business Loans", icon: "fa-bank", count: 189 },
    { id: 3, name: "Cash Flow", icon: "fa-line-chart", count: 156 },
    { id: 4, name: "Tax Strategy", icon: "fa-calculator", count: 98 },
    { id: 5, name: "Growth Hacks", icon: "fa-rocket", count: 145 },
    { id: 6, name: "Pitch Decks", icon: "fa-file-text", count: 67 },
    { id: 7, name: "Investor Ready", icon: "fa-handshake-o", count: 112 },
    { id: 8, name: "Financial Models", icon: "fa-table", count: 83 }
  ];

  return (
    <CommunityAuthContext.Provider value={{ currentUser, notifications }}>
      <div className="community">
        {/* Top Navigation */}
        <nav className="community__nav">
          <div className="community__nav-container">
            <div className="community__nav-left">
              <Link to="/community" className="community__logo">
                <i className="fa fa-comments" aria-hidden="true"></i>
                <span>The Capital Community</span>
              </Link>

              <button 
                className="community__mobile-toggle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle menu"
              >
                <span className="community__bar" />
                <span className="community__bar" />
                <span className="community__bar" />
              </button>

              <div className="community__search">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input 
                  type="search" 
                  placeholder="Search discussions..." 
                  className="community__search-input"
                />
              </div>
            </div>

            <div className="community__nav-right">
              <Link to="/community/create" className="community__create-btn">
                <i className="fa fa-plus" aria-hidden="true"></i>
                <span>Ask Question</span>
              </Link>

              <div className="community__notifications">
                <button className="community__notif-btn">
                  <i className="fa fa-bell-o" aria-hidden="true"></i>
                  {notifications > 0 && (
                    <span className="community__notif-badge">{notifications}</span>
                  )}
                </button>
              </div>

              <div className="community__user">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name}
                  className="community__avatar"
                />
                <div className="community__user-dropdown">
                  <Link to="/community/profile">Profile</Link>
                  <Link to="/community/settings">Settings</Link>
                  <Link to="/">Sign Out</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Layout */}
        <div className="community__layout">
          {/* Sidebar */}
          <aside className={`community__sidebar ${sidebarOpen ? 'isOpen' : ''}`}>
            <div className="community__sidebar-content">
              <div className="community__user-card">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name}
                  className="community__user-avatar"
                />
                <div className="community__user-info">
                  <h3 className="community__user-name">{currentUser.name}</h3>
                  <span className="community__user-username">{currentUser.username}</span>
                  <div className="community__user-rep">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <span>{currentUser.reputation} reputation</span>
                  </div>
                </div>
              </div>

              <div className="community__sidebar-section">
                <h4 className="community__sidebar-title">
                  <i className="fa fa-fire" aria-hidden="true"></i>
                  Trending Topics
                </h4>
                <ul className="community__topic-list">
                  {topics.slice(0, 5).map(topic => (
                    <li key={topic.id}>
                      <Link to={`/community/topic/${topic.id}`} className="community__topic-link">
                        <i className={`fa ${topic.icon}`} aria-hidden="true"></i>
                        <span>{topic.name}</span>
                        <span className="community__topic-count">{topic.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="community__sidebar-section">
                <h4 className="community__sidebar-title">
                  <i className="fa fa-tags" aria-hidden="true"></i>
                  All Topics
                </h4>
                <ul className="community__topic-list">
                  {topics.map(topic => (
                    <li key={topic.id}>
                      <Link to={`/community/topic/${topic.id}`} className="community__topic-link">
                        <i className={`fa ${topic.icon}`} aria-hidden="true"></i>
                        <span>{topic.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="community__sidebar-footer">
                <Link to="/community/guidelines">Community Guidelines</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="community__main">
            <Outlet />
          </main>
        </div>
      </div>
    </CommunityAuthContext.Provider>
  );
};