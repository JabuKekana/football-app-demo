import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PostCard } from "./PostCard";
import { UserBadge } from "./UserBadge";
import "./styles/profile.css";

export const Profile = () => {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState("posts");

  // Mock user data (would fetch based on userId)
  const user = {
    id: userId || 1,
    name: "Sarah M.",
    username: "@sarah_finance",
    avatar: "https://i.pravatar.cc/150?u=1",
    coverPhoto: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200",
    reputation: 1240,
    role: "Financial Analyst",
    location: "Johannesburg, SA",
    joined: "January 2025",
    bio: "Financial analyst specializing in SME funding and cash flow management. Previously worked at a top investment bank. Passionate about helping entrepreneurs succeed.",
    badges: ["Top Contributor", "Funding Expert", "Cash Flow Expert"],
    stats: {
      posts: 87,
      comments: 342,
      followers: 1240,
      following: 156
    }
  };

  const userPosts = [
    {
      id: 4,
      title: "Tips for managing cash flow during seasonal downturns?",
      content: "Our retail business does 70% of revenue in Q4. The first quarter is always tight. What strategies have worked for other seasonal businesses to smooth cash flow and avoid emergency funding?",
      author: user,
      timestamp: "2 days ago",
      votes: 203,
      comments: 56,
      views: 3400,
      topics: ["Cash Flow", "Business Loans"],
      isSaved: false,
      isUpvoted: false,
      isDownvoted: false
    }
  ];

  const userComments = [
    {
      id: 1001,
      postTitle: "How to structure a pitch deck for angel investors?",
      content: "Great question! Make sure to include your traction slide early - investors want to see what you've achieved with limited resources. Also, keep the team slide simple but impactful.",
      timestamp: "3 hours ago",
      votes: 24
    }
  ];

  const handleVote = () => {}; // Mock function

  const handleSave = () => {}; // Mock function

  return (
    <div className="profile">
      {/* Cover Image */}
      <div className="profile__cover">
        <img src={user.coverPhoto} alt="Cover" className="profile__cover-image" />
      </div>

      {/* Profile Header */}
      <div className="profile__header">
        <div className="profile__avatar-container">
          <img src={user.avatar} alt={user.name} className="profile__avatar" />
          <div className="profile__badges">
            <UserBadge badges={user.badges} size="large" />
          </div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{user.name}</h1>
          <div className="profile__username">{user.username}</div>
          <div className="profile__meta">
            <span className="profile__meta-item">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {user.location}
            </span>
            <span className="profile__meta-item">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              Joined {user.joined}
            </span>
            <span className="profile__meta-item">
              <i className="fa fa-star" aria-hidden="true"></i>
              {user.reputation} reputation
            </span>
          </div>
        </div>

        <div className="profile__actions">
          <button className="profile__follow-btn">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Follow
          </button>
          <button className="profile__message-btn">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            Message
          </button>
        </div>
      </div>

      {/* Bio */}
      <div className="profile__bio">
        <p>{user.bio}</p>
      </div>

      {/* Stats */}
      <div className="profile__stats">
        <div className="profile__stat">
          <span className="profile__stat-value">{user.stats.posts}</span>
          <span className="profile__stat-label">Posts</span>
        </div>
        <div className="profile__stat">
          <span className="profile__stat-value">{user.stats.comments}</span>
          <span className="profile__stat-label">Comments</span>
        </div>
        <div className="profile__stat">
          <span className="profile__stat-value">{user.stats.followers}</span>
          <span className="profile__stat-label">Followers</span>
        </div>
        <div className="profile__stat">
          <span className="profile__stat-value">{user.stats.following}</span>
          <span className="profile__stat-label">Following</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile__tabs">
        <button 
          className={`profile__tab ${activeTab === 'posts' ? 'isActive' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          <i className="fa fa-file-text" aria-hidden="true"></i>
          Posts
        </button>
        <button 
          className={`profile__tab ${activeTab === 'comments' ? 'isActive' : ''}`}
          onClick={() => setActiveTab('comments')}
        >
          <i className="fa fa-comments" aria-hidden="true"></i>
          Comments
        </button>
        <button 
          className={`profile__tab ${activeTab === 'saved' ? 'isActive' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          <i className="fa fa-bookmark" aria-hidden="true"></i>
          Saved
        </button>
        <button 
          className={`profile__tab ${activeTab === 'about' ? 'isActive' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
          About
        </button>
      </div>

      {/* Tab Content */}
      <div className="profile__content">
        {activeTab === 'posts' && (
          <div className="profile__posts">
            {userPosts.map(post => (
              <PostCard 
                key={post.id} 
                post={post}
                onVote={handleVote}
                onSave={handleSave}
              />
            ))}
          </div>
        )}

        {activeTab === 'comments' && (
          <div className="profile__comments">
            {userComments.map(comment => (
              <div key={comment.id} className="profile__comment">
                <Link to={`/community/post/${comment.id}`} className="profile__comment-post">
                  {comment.postTitle}
                </Link>
                <p className="profile__comment-content">{comment.content}</p>
                <div className="profile__comment-meta">
                  <span className="profile__comment-time">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {comment.timestamp}
                  </span>
                  <span className="profile__comment-votes">
                    <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    {comment.votes} votes
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="profile__saved">
            <p className="profile__empty">No saved posts yet</p>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="profile__about">
            <div className="profile__about-section">
              <h3>Badges & Achievements</h3>
              <div className="profile__badges-list">
                {user.badges.map((badge, index) => (
                  <div key={index} className="profile__badge-item">
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div className="profile__about-section">
              <h3>Areas of Expertise</h3>
              <div className="profile__expertise">
                <span className="profile__expertise-tag">SME Funding</span>
                <span className="profile__expertise-tag">Cash Flow Management</span>
                <span className="profile__expertise-tag">Financial Modeling</span>
                <span className="profile__expertise-tag">Business Valuation</span>
              </div>
            </div>

            <div className="profile__about-section">
              <h3>Activity</h3>
              <div className="profile__activity">
                <div className="profile__activity-item">
                  <span className="profile__activity-label">Member since:</span>
                  <span className="profile__activity-value">{user.joined}</span>
                </div>
                <div className="profile__activity-item">
                  <span className="profile__activity-label">Last active:</span>
                  <span className="profile__activity-value">Today</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};