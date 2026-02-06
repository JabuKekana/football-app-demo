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
        title: "Scaling from startup to SME. Share your experience",
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
    <section className="cp" id="community" aria-labelledby="cp-title">
      <div className="cp__container">
        <header className="cp__header">
          <div className="cp__kicker">Community</div>
          <h2 className="cp__title" id="cp-title">
            Business Community
          </h2>
          <p className="cp__lead">
            Connect with fellow entrepreneurs, share experiences, and get answers to your business questions.
          </p>
        </header>

        <div className="cp__grid">
          <aside className="cp__left" aria-label="Community actions">
            <div className="cp__actionCard">
              <div className="cp__actionIcon" aria-hidden="true">
                <i className="fa fa-users"></i>
              </div>
              <h3 className="cp__actionTitle">Join 500+ Entrepreneurs</h3>
              <p className="cp__actionText">Connect with business owners in our community</p>
              <a className="cp__primaryBtn" href="/signup">
                Create Account
              </a>
            </div>

            <div className="cp__actionCard cp__actionCard--alt">
              <div className="cp__actionIcon" aria-hidden="true">
                <i className="fa fa-comment"></i>
              </div>
              <h3 className="cp__actionTitle">Start a Discussion</h3>

              <form className="cp__form" onSubmit={handlePostTopic}>
                <label className="cp__label" htmlFor="cp-topic">
                  Post a new topic
                </label>

                <textarea
                  className="cp__textarea"
                  id="cp-topic"
                  placeholder="What's on your mind? Ask a question or share advice..."
                  rows={3}
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />

                <button className="cp__secondaryBtn" type="submit">
                  Post Topic
                </button>
              </form>
            </div>
          </aside>

          <div className="cp__right" aria-label="Trending discussions">
            <div className="cp__topRow">
              <h3 className="cp__sectionTitle">
                <i className="fa fa-fire" aria-hidden="true"></i>
                <span>Trending Discussions</span>
              </h3>

              <a className="cp__allLink" href="/community">
                View all <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="cp__topics">
              {topics.map((topic) => (
                <article className="cp__topic" key={topic.id}>
                  <div className="cp__topicHead">
                    <span className="cp__tag">{topic.category}</span>
                  </div>

                  <h4 className="cp__topicTitle">{topic.title}</h4>

                  <div className="cp__meta">
                    <span className="cp__metaItem">
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span>{topic.author}</span>
                    </span>

                    <span className="cp__metaItem">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      <span>{topic.timeAgo}</span>
                    </span>
                  </div>

                  <div className="cp__stats">
                    <span className="cp__stat">
                      <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                      <span>{topic.likes}</span>
                    </span>

                    <span className="cp__stat">
                      <i className="fa fa-comments" aria-hidden="true"></i>
                      <span>{topic.comments}</span>
                    </span>
                  </div>

                  <a className="cp__ghostBtn" href="/community">
                    Join Discussion
                  </a>

                  <span className="cp__topicAccent" aria-hidden="true" />
                </article>
              ))}
            </div>

            <div className="cp__metrics" aria-label="Community metrics">
              <div className="cp__metric">
                <div className="cp__metricValue">500+</div>
                <div className="cp__metricLabel">Members</div>
              </div>
              <div className="cp__metric">
                <div className="cp__metricValue">1.2k</div>
                <div className="cp__metricLabel">Discussions</div>
              </div>
              <div className="cp__metric">
                <div className="cp__metricValue">24/7</div>
                <div className="cp__metricLabel">Active Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cp__cta">
          <div className="cp__ctaText">
            <h3 className="cp__ctaTitle">Ready to join the conversation?</h3>
            <p className="cp__ctaLead">
              Get exclusive access to industry insights, funding opportunities, and expert advice.
            </p>
          </div>

          <div className="cp__ctaActions">
            <a className="cp__ctaBtn" href="/community">
              Explore Full Community
            </a>
            <a className="cp__ctaBtn cp__ctaBtn--outline" href="/signup">
              Sign Up Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
