import React from "react";
import { Link } from "react-router-dom";
import { VotingButtons } from "./VotingButtons";
import { UserBadge } from "./UserBadge";
import "./styles/post-card.css";

export const PostCard = ({ post, onVote, onSave }) => {
  const handleUpvote = (e) => {
    e.preventDefault();
    onVote(post.id, 'up');
  };

  const handleDownvote = (e) => {
    e.preventDefault();
    onVote(post.id, 'down');
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(post.id);
  };

  return (
    <article className="postCard">
      <div className="postCard__vote">
        <VotingButtons 
          votes={post.votes}
          isUpvoted={post.isUpvoted}
          isDownvoted={post.isDownvoted}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
      </div>

      <div className="postCard__content">
        <Link to={`/community/post/${post.id}`} className="postCard__link">
          <h2 className="postCard__title">{post.title}</h2>
          <p className="postCard__excerpt">{post.content}</p>
        </Link>

        <div className="postCard__meta">
          <div className="postCard__author">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="postCard__avatar"
            />
            <div className="postCard__author-info">
              <Link to={`/community/profile/${post.author.id}`} className="postCard__author-name">
                {post.author.name}
                <UserBadge badges={post.author.badges} />
              </Link>
              <span className="postCard__author-username">{post.author.username}</span>
              <span className="postCard__rep">
                <i className="fa fa-star" aria-hidden="true"></i>
                {post.author.reputation}
              </span>
            </div>
          </div>

          <div className="postCard__stats">
            <span className="postCard__stat">
              <i className="fa fa-comment" aria-hidden="true"></i>
              {post.comments} comments
            </span>
            <span className="postCard__stat">
              <i className="fa fa-eye" aria-hidden="true"></i>
              {post.views} views
            </span>
            <span className="postCard__time">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              {post.timestamp}
            </span>
          </div>

          <div className="postCard__topics">
            {post.topics.map(topic => (
              <Link 
                key={topic} 
                to={`/community/topic/${topic.toLowerCase().replace(' ', '-')}`}
                className="postCard__topic"
              >
                {topic}
              </Link>
            ))}
          </div>

          <div className="postCard__actions">
            <button 
              className={`postCard__action ${post.isSaved ? 'isSaved' : ''}`}
              onClick={handleSave}
            >
              <i className={`fa fa-bookmark${post.isSaved ? '' : '-o'}`} aria-hidden="true"></i>
              {post.isSaved ? 'Saved' : 'Save'}
            </button>
            <button className="postCard__action">
              <i className="fa fa-share-alt" aria-hidden="true"></i>
              Share
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};