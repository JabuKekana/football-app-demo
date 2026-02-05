// CommunityPreview.jsx
import React, { useMemo, useState } from "react";
import "./styles/community-preview.css";

export const CommunityPreview = () => {
  const initialTopics = useMemo(
    () => [
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
    ],
    []
  );

  const [topics, setTopics] = useState(initialTopics);
  const [newTopic, setNewTopic] = useState("");

  const handlePostTopic = (e) => {
    e.preventDefault();
    const trimmed = newTopic.trim();
    if (!trimmed) return;

    const newTopicObj = {
      id: Date.now(),
      title: trimmed,
      author: "You",
      likes: 0,
      comments: 0,
      category: "New",
      timeAgo: "Just now",
    };

    setTopics((prev) => [newTopicObj, ...prev]);
    setNewTopic("");
  };

  return (
    <section id="community" className="cp">
      <div className="cp__shell">
        <div className="cp__title">
          <h2>Business Community</h2>
          <p>
            Connect with fellow entrepreneurs, share experiences, and get answers
            to your business questions.
          </p>
        </div>

        <div className="cp__container">
          <div className="cp__actions">
            <div className="cp-card cp-action">
              <div className="cp-action__icon" aria-hidden="true">
                <i className="fa fa-users"></i>
              </div>
              <h3>Join 500+ Entrepreneurs</h3>
              <p>Connect with business owners in our community</p>
              <button className="cp-btn cp-btn--primary cp-btn--block">
                Create Account
              </button>
            </div>

            <div className="cp-card cp-action">
              <div className="cp-action__icon" aria-hidden="true">
                <i className="fa fa-comment"></i>
              </div>
              <h3>Start a Discussion</h3>

              <form onSubmit={handlePostTopic} className="cp-form">
                <label className="cp-sr-only" htmlFor="cp-topic">
                  Post a new topic
                </label>

                <textarea
                  id="cp-topic"
                  className="cp-textarea"
                  placeholder="What's on your mind? Ask a question or share advice..."
                  rows={3}
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />

                <button
                  type="submit"
                  className="cp-btn cp-btn--secondary cp-btn--block"
                >
                  Post Topic
                </button>
              </form>
            </div>
          </div>

          <div className="cp-card cp-topics">
            <div className="cp-topics__header">
              <h3>
                <i className="fa fa-fire" aria-hidden="true"></i>
                <span>Trending Discussions</span>
              </h3>

              <a href="/community" className="cp-link">
                View all <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="cp-topics__list">
              {topics.map((topic) => (
                <article key={topic.id} className="cp-topic">
                  <div className="cp-topic__category">{topic.category}</div>

                  <h4 className="cp-topic__title">{topic.title}</h4>

                  <div className="cp-topic__meta">
                    <span className="cp-topic__metaItem">
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span>{topic.author}</span>
                    </span>

                    <span className="cp-topic__metaItem">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      <span>{topic.timeAgo}</span>
                    </span>
                  </div>

                  <div className="cp-topic__stats">
                    <span className="cp-topic__stat">
                      <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                      <span>{topic.likes}</span>
                    </span>

                    <span className="cp-topic__stat">
                      <i className="fa fa-comments" aria-hidden="true"></i>
                      <span>{topic.comments}</span>
                    </span>
                  </div>

                  <button className="cp-btn cp-btn--outline cp-btn--sm">
                    Join Discussion
                  </button>
                </article>
              ))}
            </div>

            <div className="cp-stats">
              <div className="cp-stat">
                <div className="cp-stat__num">500+</div>
                <div className="cp-stat__label">Members</div>
              </div>
              <div className="cp-stat">
                <div className="cp-stat__num">1.2k</div>
                <div className="cp-stat__label">Discussions</div>
              </div>
              <div className="cp-stat">
                <div className="cp-stat__num">24/7</div>
                <div className="cp-stat__label">Active Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cp-card cp-cta">
          <h3>Ready to join the conversation?</h3>
          <p>
            Get exclusive access to industry insights, funding opportunities, and
            expert advice.
          </p>

          <div className="cp-cta__buttons">
            <a href="/community" className="cp-btn cp-btn--primary cp-btn--lg">
              Explore Full Community
            </a>
            <a href="/signup" className="cp-btn cp-btn--outline cp-btn--lg">
              Sign Up Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
