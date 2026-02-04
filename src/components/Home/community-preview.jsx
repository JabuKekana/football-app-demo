import React, { useState } from "react";
import "./styles/community-preview.css";

export const CommunityPreview = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "How to secure your first business loan?",
      author: "Sarah M.",
      likes: 42,
      comments: 15,
      category: "Funding Tips",
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      title: "Best practices for invoice management",
      author: "David K.",
      likes: 28,
      comments: 8,
      category: "Finance",
      timeAgo: "5 hours ago",
    },
    {
      id: 3,
      title: "Scaling from startup to SME - Share your experience",
      author: "BusinessGuru",
      likes: 65,
      comments: 23,
      category: "Growth",
      timeAgo: "1 day ago",
    },
    {
      id: 4,
      title: "Tax season preparation tips",
      author: "TaxExpertZA",
      likes: 31,
      comments: 12,
      category: "Tax",
      timeAgo: "2 days ago",
    },
  ]);

  const [newTopic, setNewTopic] = useState("");

  const handlePostTopic = (e) => {
    e.preventDefault();
    if (newTopic.trim()) {
      const newTopicObj = {
        id: topics.length + 1,
        title: newTopic,
        author: "You",
        likes: 0,
        comments: 0,
        category: "New",
        timeAgo: "Just now",
      };
      setTopics([newTopicObj, ...topics]);
      setNewTopic("");
    }
  };

  return (
    <div id="community" className="community-preview">
      <div className="container">
        <div className="section-title">
          <h2>Business Community</h2>
          <p>
            Connect with fellow entrepreneurs, share experiences, and get
            answers to your business questions.
          </p>
        </div>

        <div className="community-container">
          {/* Left side - Quick actions */}
          <div className="community-actions">
            <div className="action-card">
              <div className="action-icon">
                <i className="fa fa-users"></i>
              </div>
              <h3>Join 500+ Entrepreneurs</h3>
              <p>Connect with business owners in our community</p>
              <button className="btn btn-primary btn-block">
                Create Account
              </button>
            </div>

            <div className="action-card">
              <div className="action-icon">
                <i className="fa fa-comment"></i>
              </div>
              <h3>Start a Discussion</h3>
              <form onSubmit={handlePostTopic}>
                <textarea
                  className="form-control"
                  placeholder="What's on your mind? Ask a question or share advice..."
                  rows="3"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />
                <button type="submit" className="btn btn-secondary btn-block">
                  Post Topic
                </button>
              </form>
            </div>
          </div>

          {/* Right side - Trending topics */}
          <div className="community-topics">
            <div className="topics-header">
              <h3>
                <i className="fa fa-fire"></i> Trending Discussions
              </h3>
              <a href="/community" className="view-all">
                View all →
              </a>
            </div>

            <div className="topics-list">
              {topics.map((topic) => (
                <div key={topic.id} className="topic-card">
                  <div className="topic-category">{topic.category}</div>
                  <h4 className="topic-title">{topic.title}</h4>
                  <div className="topic-meta">
                    <span className="topic-author">
                      <i className="fa fa-user"></i> {topic.author}
                    </span>
                    <span className="topic-time">
                      <i className="fa fa-clock-o"></i> {topic.timeAgo}
                    </span>
                  </div>
                  <div className="topic-stats">
                    <span className="stat-item">
                      <i className="fa fa-thumbs-up"></i> {topic.likes}
                    </span>
                    <span className="stat-item">
                      <i className="fa fa-comments"></i> {topic.comments}
                    </span>
                  </div>
                  <button className="btn btn-outline btn-sm">
                    Join Discussion
                  </button>
                </div>
              ))}
            </div>

            <div className="community-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Members</div>
              </div>
              <div className="stat">
                <div className="stat-number">1.2k</div>
                <div className="stat-label">Discussions</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Active Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="community-cta">
          <h3>Ready to join the conversation?</h3>
          <p>
            Get exclusive access to industry insights, funding opportunities,
            and expert advice.
          </p>
          <div className="cta-buttons">
            <a href="/community" className="btn btn-primary btn-lg">
              Explore Full Community
            </a>
            <a href="/signup" className="btn btn-outline btn-lg">
              Sign Up Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};