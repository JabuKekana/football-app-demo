import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VotingButtons } from "./VotingButtons";
import { UserBadge } from "./UserBadge";
import "./styles/comment-thread.css";

export const CommentThread = ({ 
  comment, 
  onVote, 
  onReply, 
  showReplyBox, 
  setShowReplyBox,
  depth = 0 
}) => {
  const [replyText, setReplyText] = useState("");
  const [showReplies, setShowReplies] = useState(true);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    onReply(comment.id, replyText);
    setReplyText("");
    setShowReplyBox(null);
  };

  const handleVote = (type) => {
    onVote(comment.id, type);
  };

  const handleReplyClick = () => {
    if (showReplyBox === comment.id) {
      setShowReplyBox(null);
    } else {
      setShowReplyBox(comment.id);
    }
  };

  return (
    <div className={`commentThread commentThread--depth-${Math.min(depth, 5)}`}>
      <div className="commentThread__main">
        <div className="commentThread__vote">
          <VotingButtons 
            votes={comment.votes || 0}
            isUpvoted={comment.isUpvoted}
            isDownvoted={comment.isDownvoted}
            onUpvote={() => handleVote('up')}
            onDownvote={() => handleVote('down')}
            size="small"
          />
        </div>

        <div className="commentThread__content">
          <div className="commentThread__header">
            <img 
              src={comment.author.avatar} 
              alt={comment.author.name}
              className="commentThread__avatar"
            />
            <div className="commentThread__author">
              <Link to={`/community/profile/${comment.author.id}`} className="commentThread__author-name">
                {comment.author.name}
                <UserBadge badges={comment.author.badges} size="small" />
              </Link>
              <span className="commentThread__author-username">{comment.author.username}</span>
              <span className="commentThread__rep">
                <i className="fa fa-star" aria-hidden="true"></i>
                {comment.author.reputation}
              </span>
              <span className="commentThread__time">{comment.timestamp}</span>
            </div>
          </div>

          <div className="commentThread__body">
            <p>{comment.content}</p>
          </div>

          <div className="commentThread__actions">
            <button 
              className="commentThread__action"
              onClick={handleReplyClick}
            >
              <i className="fa fa-reply" aria-hidden="true"></i>
              Reply
            </button>
            <button className="commentThread__action">
              <i className="fa fa-flag-o" aria-hidden="true"></i>
              Report
            </button>
          </div>

          {showReplyBox === comment.id && (
            <form className="commentThread__reply-form" onSubmit={handleReplySubmit}>
              <textarea
                className="commentThread__reply-input"
                placeholder="Write your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows={2}
              />
              <div className="commentThread__reply-actions">
                <button 
                  type="button" 
                  className="commentThread__reply-cancel"
                  onClick={() => setShowReplyBox(null)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="commentThread__reply-submit"
                  disabled={!replyText.trim()}
                >
                  Post Reply
                </button>
              </div>
            </form>
          )}

          {comment.replies && comment.replies.length > 0 && (
            <div className="commentThread__replies">
              <button 
                className="commentThread__toggle"
                onClick={() => setShowReplies(!showReplies)}
              >
                <i className={`fa fa-chevron-${showReplies ? 'down' : 'right'}`} aria-hidden="true"></i>
                {showReplies ? 'Hide' : 'Show'} {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
              </button>

              {showReplies && (
                <div className="commentThread__replies-list">
                  {comment.replies.map(reply => (
                    <CommentThread
                      key={reply.id}
                      comment={reply}
                      onVote={onVote}
                      onReply={onReply}
                      showReplyBox={showReplyBox}
                      setShowReplyBox={setShowReplyBox}
                      depth={depth + 1}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};