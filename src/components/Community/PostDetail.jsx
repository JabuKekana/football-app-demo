import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CommentThread } from "./CommentThread";
import { VotingButtons } from "./VotingButtons";
import { UserBadge } from "./UserBadge";
import "./styles/post-detail.css";

export const PostDetail = () => {
  const { postId } = useParams();
  const [newComment, setNewComment] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(null);

  // Mock post data (would fetch based on postId)
  const [post, setPost] = useState({
    id: 3,
    title: "How do you value a startup for a SAFE note?",
    content: "An investor wants to use a SAFE note with a valuation cap. How do we determine a reasonable cap? We're a pre-revenue biotech startup with some early IP and a strong team. Any real-world examples would help.\n\nWe've had interest from 3 angels who are willing to do a small syndicate round of about R1.5M. They're proposing a SAFE with a R10M cap. Is that reasonable? We don't have revenue yet but we have a prototype and some preliminary data that looks promising.\n\nWould love to hear from founders who've done SAFE notes and what caps they ended up with.",
    author: {
      id: 103,
      name: "David K.",
      username: "@david_biotech",
      avatar: "https://i.pravatar.cc/150?u=103",
      reputation: 960,
      badges: ["Biotech"],
      bio: "Founder at BioInnovate. Working on novel drug delivery platforms."
    },
    timestamp: "1 day ago",
    votes: 156,
    views: 2100,
    topics: ["Investor Ready", "Financial Models"],
    isUpvoted: true,
    isDownvoted: false,
    comments: [
      {
        id: 1001,
        content: "Great question! For pre-revenue biotech, caps usually range from R5M-R15M depending on the stage of IP and team. A R10M cap with angels is actually quite reasonable. Just make sure there's a most-favored-nation clause and clear discount rate (typically 20%).",
        author: {
          id: 201,
          name: "Dr. Sarah Chen",
          username: "@sarah_vc",
          avatar: "https://i.pravatar.cc/150?u=201",
          reputation: 3450,
          badges: ["VC", "Biotech Expert"]
        },
        timestamp: "20 hours ago",
        votes: 45,
        replies: [
          {
            id: 1002,
            content: "Thanks Sarah! What about the valuation cap - should we negotiate for a lower cap or focus more on the discount rate?",
            author: {
              id: 103,
              name: "David K.",
              username: "@david_biotech",
              avatar: "https://i.pravatar.cc/150?u=103",
              reputation: 960,
              badges: ["Biotech"]
            },
            timestamp: "18 hours ago",
            votes: 8,
            replies: [
              {
                id: 1003,
                content: "In biotech, the cap matters more than discount rate because the next round valuation is harder to predict. A lower cap gives investors more protection but might signal lack of confidence. I'd suggest focusing on the cap and making sure it aligns with your next round expectations.",
                author: {
                  id: 201,
                  name: "Dr. Sarah Chen",
                  username: "@sarah_vc",
                  avatar: "https://i.pravatar.cc/150?u=201",
                  reputation: 3450,
                  badges: ["VC", "Biotech Expert"]
                },
                timestamp: "16 hours ago",
                votes: 23
              }
            ]
          }
        ]
      },
      {
        id: 1004,
        content: "Another thing to consider - make sure you understand the pro-rata rights. Some angels will want the right to participate in future rounds to maintain their ownership. This can be good (shows commitment) but also creates complexity later.",
        author: {
          id: 202,
          name: "Michael Osei",
          username: "@michael_legal",
          avatar: "https://i.pravatar.cc/150?u=202",
          reputation: 2120,
          badges: ["Legal Expert"]
        },
        timestamp: "15 hours ago",
        votes: 31,
        replies: []
      }
    ]
  });

  const handleVote = (type) => {
    setPost(prev => ({
      ...prev,
      votes: prev.isUpvoted ? prev.votes - 1 : prev.votes + 1,
      isUpvoted: !prev.isUpvoted,
      isDownvoted: false
    }));
  };

  const handleCommentVote = (commentId, type, isReply = false, parentId = null) => {
    // Deep clone and update comment votes
    const updateComments = (comments) => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            votes: comment.isUpvoted ? comment.votes - 1 : comment.votes + 1,
            isUpvoted: !comment.isUpvoted,
            isDownvoted: false
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: updateComments(comment.replies)
          };
        }
        return comment;
      });
    };

    setPost(prev => ({
      ...prev,
      comments: updateComments(prev.comments)
    }));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      content: newComment,
      author: {
        id: 1,
        name: "Sarah M.",
        username: "@sarah_finance",
        avatar: "https://i.pravatar.cc/150?u=1",
        reputation: 1240,
        badges: ["Top Contributor"]
      },
      timestamp: "Just now",
      votes: 0,
      replies: []
    };

    setPost(prev => ({
      ...prev,
      comments: [comment, ...prev.comments]
    }));
    setNewComment("");
  };

  const handleAddReply = (commentId, replyText) => {
    if (!replyText.trim()) return;

    const reply = {
      id: Date.now(),
      content: replyText,
      author: {
        id: 1,
        name: "Sarah M.",
        username: "@sarah_finance",
        avatar: "https://i.pravatar.cc/150?u=1",
        reputation: 1240,
        badges: ["Top Contributor"]
      },
      timestamp: "Just now",
      votes: 0
    };

    const addReplyToComments = (comments) => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply]
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: addReplyToComments(comment.replies)
          };
        }
        return comment;
      });
    };

    setPost(prev => ({
      ...prev,
      comments: addReplyToComments(prev.comments)
    }));
    setShowReplyBox(null);
  };

  return (
    <div className="postDetail">
      <div className="postDetail__header">
        <Link to="/community" className="postDetail__back">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          Back to Feed
        </Link>

        <div className="postDetail__topics">
          {post.topics.map(topic => (
            <Link 
              key={topic} 
              to={`/community/topic/${topic.toLowerCase().replace(' ', '-')}`}
              className="postDetail__topic"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>

      <article className="postDetail__article">
        <div className="postDetail__vote">
          <VotingButtons 
            votes={post.votes}
            isUpvoted={post.isUpvoted}
            isDownvoted={post.isDownvoted}
            onUpvote={() => handleVote('up')}
            onDownvote={() => handleVote('down')}
          />
        </div>

        <div className="postDetail__content">
          <h1 className="postDetail__title">{post.title}</h1>
          
          <div className="postDetail__author">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="postDetail__author-avatar"
            />
            <div className="postDetail__author-info">
              <div className="postDetail__author-name">
                {post.author.name}
                <UserBadge badges={post.author.badges} />
              </div>
              <div className="postDetail__author-meta">
                <span>{post.author.username}</span>
                <span className="postDetail__rep">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {post.author.reputation}
                </span>
                <span>{post.timestamp}</span>
              </div>
            </div>
          </div>

          <div className="postDetail__body">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="postDetail__stats">
            <span className="postDetail__stat">
              <i className="fa fa-eye" aria-hidden="true"></i>
              {post.views} views
            </span>
            <span className="postDetail__stat">
              <i className="fa fa-comment" aria-hidden="true"></i>
              {post.comments.length} comments
            </span>
          </div>

          <div className="postDetail__actions">
            <button className="postDetail__action">
              <i className="fa fa-share-alt" aria-hidden="true"></i>
              Share
            </button>
            <button className="postDetail__action">
              <i className="fa fa-bookmark-o" aria-hidden="true"></i>
              Save
            </button>
            <button className="postDetail__action">
              <i className="fa fa-flag-o" aria-hidden="true"></i>
              Report
            </button>
          </div>
        </div>
      </article>

      <section className="postDetail__comments">
        <h2 className="postDetail__comments-title">
          {post.comments.length} Comments
        </h2>

        <form className="postDetail__comment-form" onSubmit={handleAddComment}>
          <img 
            src="https://i.pravatar.cc/150?u=1" 
            alt="Your avatar"
            className="postDetail__comment-avatar"
          />
          <div className="postDetail__comment-input-wrapper">
            <textarea
              className="postDetail__comment-input"
              placeholder="Add to the discussion..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={3}
            />
            <button 
              type="submit" 
              className="postDetail__comment-submit"
              disabled={!newComment.trim()}
            >
              Post Comment
            </button>
          </div>
        </form>

        <div className="postDetail__comments-list">
          {post.comments.map(comment => (
            <CommentThread 
              key={comment.id}
              comment={comment}
              onVote={handleCommentVote}
              onReply={handleAddReply}
              showReplyBox={showReplyBox}
              setShowReplyBox={setShowReplyBox}
            />
          ))}
        </div>
      </section>
    </div>
  );
};