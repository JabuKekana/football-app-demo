import React from "react";
import "./styles/voting-buttons.css";

export const VotingButtons = ({ 
  votes, 
  isUpvoted, 
  isDownvoted, 
  onUpvote, 
  onDownvote,
  size = "medium" 
}) => {
  return (
    <div className={`votingButtons votingButtons--${size}`}>
      <button 
        className={`votingButtons__up ${isUpvoted ? 'isActive' : ''}`}
        onClick={onUpvote}
        aria-label="Upvote"
      >
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </button>
      
      <span className="votingButtons__count">{votes}</span>
      
      <button 
        className={`votingButtons__down ${isDownvoted ? 'isActive' : ''}`}
        onClick={onDownvote}
        aria-label="Downvote"
      >
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </button>
    </div>
  );
};