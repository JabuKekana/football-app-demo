import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopicTags } from "./TopicTags";
import "./styles/create-post.css";

export const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    topics: []
  });
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);

  const availableTopics = [
    "Funding Tips", "Business Loans", "Cash Flow", "Tax Strategy",
    "Growth Hacks", "Pitch Decks", "Investor Ready", "Financial Models"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTopicSelect = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(prev => prev.filter(t => t !== topic));
    } else if (selectedTopics.length < 3) {
      setSelectedTopics(prev => [...prev, topic]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // Simulate post creation
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/community");
    }, 1500);
  };

  const handleCancel = () => {
    navigate("/community");
  };

  return (
    <div className="createPost">
      <div className="createPost__header">
        <h1 className="createPost__title">Ask a Question</h1>
        <p className="createPost__subtitle">
          Get answers from our community of finance professionals and entrepreneurs
        </p>
      </div>

      <form className="createPost__form" onSubmit={handleSubmit}>
        <div className="createPost__field">
          <label className="createPost__label" htmlFor="title">
            Title <span className="createPost__required">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="createPost__input"
            placeholder="e.g., How do I prepare financial statements for a bank loan?"
            value={formData.title}
            onChange={handleInputChange}
            required
            maxLength={200}
          />
          <div className="createPost__hint">
            Be specific and imagine you're asking a question to another person
          </div>
        </div>

        <div className="createPost__field">
          <label className="createPost__label" htmlFor="content">
            Details <span className="createPost__required">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            className="createPost__textarea"
            placeholder="Provide context, details, and what you've tried so far..."
            value={formData.content}
            onChange={handleInputChange}
            required
            rows={8}
          />
          <div className="createPost__hint">
            Include relevant background information. The more details, the better the answers.
          </div>
        </div>

        <div className="createPost__field">
          <label className="createPost__label">
            Topics <span className="createPost__required">*</span>
          </label>
          <div className="createPost__topics-selector">
            <button
              type="button"
              className="createPost__topics-button"
              onClick={() => setShowTopicDropdown(!showTopicDropdown)}
            >
              <span>
                {selectedTopics.length === 0 
                  ? "Select up to 3 topics" 
                  : `${selectedTopics.length} topic${selectedTopics.length > 1 ? 's' : ''} selected`}
              </span>
              <i className={`fa fa-chevron-${showTopicDropdown ? 'up' : 'down'}`} aria-hidden="true"></i>
            </button>

            {showTopicDropdown && (
              <div className="createPost__topics-dropdown">
                {availableTopics.map(topic => (
                  <label key={topic} className="createPost__topic-option">
                    <input
                      type="checkbox"
                      checked={selectedTopics.includes(topic)}
                      onChange={() => handleTopicSelect(topic)}
                      disabled={!selectedTopics.includes(topic) && selectedTopics.length >= 3}
                    />
                    <span>{topic}</span>
                  </label>
                ))}
              </div>
            )}

            {selectedTopics.length > 0 && (
              <div className="createPost__selected-topics">
                <TopicTags topics={selectedTopics} size="medium" interactive={false} />
              </div>
            )}
          </div>
        </div>

        <div className="createPost__guidelines">
          <h4 className="createPost__guidelines-title">Posting Guidelines</h4>
          <ul className="createPost__guidelines-list">
            <li>Keep questions focused on finance, funding, and business growth</li>
            <li>Be respectful and constructive</li>
            <li>Avoid promotional content or self-promotion</li>
            <li>Don't share sensitive business information</li>
          </ul>
        </div>

        <div className="createPost__actions">
          <button
            type="button"
            className="createPost__cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="createPost__submit"
            disabled={
              isSubmitting || 
              !formData.title.trim() || 
              !formData.content.trim() || 
              selectedTopics.length === 0
            }
          >
            {isSubmitting ? (
              <>
                <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
                Posting...
              </>
            ) : (
              "Post Question"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};