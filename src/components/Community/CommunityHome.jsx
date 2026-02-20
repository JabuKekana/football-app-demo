import React, { useState } from "react";
import { PostCard } from "./PostCard";
import "./styles/community.css";

export const CommunityHome = () => {
  const [feedType, setFeedType] = useState("trending");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How to structure a pitch deck for angel investors?",
      content: "I'm preparing to pitch to a local angel group next month. What are the must-have slides and common mistakes to avoid? My startup is in fintech, currently pre-revenue but with a working prototype.",
      author: {
        id: 101,
        name: "Michael T.",
        username: "@mike_fintech",
        avatar: "https://i.pravatar.cc/150?u=101",
        reputation: 2450,
        badges: ["Top Contributor", "Pitch Expert"]
      },
      timestamp: "2 hours ago",
      votes: 124,
      comments: 34,
      views: 1204,
      topics: ["Funding Tips", "Pitch Decks"],
      isSaved: false,
      isUpvoted: false,
      isDownvoted: false
    },
    {
      id: 2,
      title: "Revenue-based financing vs traditional term loans - pros and cons?",
      content: "We're a SaaS company doing R200k MRR and need about R1.5M for expansion. Has anyone here used revenue-based financing? How does it compare to traditional bank loans for a growing business?",
      author: {
        id: 102,
        name: "Lisa N.",
        username: "@lisa_saas",
        avatar: "https://i.pravatar.cc/150?u=102",
        reputation: 1870,
        badges: ["SaaS Expert"]
      },
      timestamp: "5 hours ago",
      votes: 89,
      comments: 27,
      views: 890,
      topics: ["Business Loans", "Growth Hacks"],
      isSaved: false,
      isUpvoted: false,
      isDownvoted: false
    },
    {
      id: 3,
      title: "How do you value a startup for a SAFE note?",
      content: "An investor wants to use a SAFE note with a valuation cap. How do we determine a reasonable cap? We're a pre-revenue biotech startup with some early IP and a strong team. Any real-world examples would help.",
      author: {
        id: 103,
        name: "David K.",
        username: "@david_biotech",
        avatar: "https://i.pravatar.cc/150?u=103",
        reputation: 960,
        badges: ["Biotech"]
      },
      timestamp: "1 day ago",
      votes: 156,
      comments: 42,
      views: 2100,
      topics: ["Investor Ready", "Financial Models"],
      isSaved: true,
      isUpvoted: true,
      isDownvoted: false
    },
    {
      id: 4,
      title: "Tips for managing cash flow during seasonal downturns?",
      content: "Our retail business does 70% of revenue in Q4. The first quarter is always tight. What strategies have worked for other seasonal businesses to smooth cash flow and avoid emergency funding?",
      author: {
        id: 104,
        name: "Sarah M.",
        username: "@sarah_retail",
        avatar: "https://i.pravatar.cc/150?u=104",
        reputation: 2120,
        badges: ["Top Contributor", "Cash Flow Expert"]
      },
      timestamp: "2 days ago",
      votes: 203,
      comments: 56,
      views: 3400,
      topics: ["Cash Flow", "Business Loans"],
      isSaved: false,
      isUpvoted: false,
      isDownvoted: false
    },
    {
      id: 5,
      title: "How to prepare financial statements for a bank loan application?",
      content: "Applying for a R2M business loan and the bank wants 3 years of financials plus projections. Our books are clean but we've never done formal projections. What format do banks prefer? Any templates?",
      author: {
        id: 105,
        name: "James W.",
        username: "@james_construction",
        avatar: "https://i.pravatar.cc/150?u=105",
        reputation: 1340,
        badges: ["Funding Ready"]
      },
      timestamp: "3 days ago",
      votes: 67,
      comments: 19,
      views: 1540,
      topics: ["Funding Tips", "Business Loans"],
      isSaved: false,
      isUpvoted: false,
      isDownvoted: false
    }
  ]);

  const handleVote = (postId, type) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        if (type === 'up') {
          return {
            ...post,
            votes: post.isUpvoted ? post.votes - 1 : post.votes + 1,
            isUpvoted: !post.isUpvoted,
            isDownvoted: false
          };
        } else {
          return {
            ...post,
            votes: post.isDownvoted ? post.votes + 1 : post.votes - 1,
            isDownvoted: !post.isDownvoted,
            isUpvoted: false
          };
        }
      }
      return post;
    }));
  };

  const handleSave = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, isSaved: !post.isSaved } : post
    ));
  };

  return (
    <div className="community__feed">
      {/* Feed Header */}
      <div className="community__feed-header">
        <h1 className="community__feed-title">Community Discussions</h1>
        
        <div className="community__feed-tabs">
          <button 
            className={`community__tab ${feedType === 'trending' ? 'isActive' : ''}`}
            onClick={() => setFeedType('trending')}
          >
            <i className="fa fa-fire" aria-hidden="true"></i>
            Trending
          </button>
          <button 
            className={`community__tab ${feedType === 'recent' ? 'isActive' : ''}`}
            onClick={() => setFeedType('recent')}
          >
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            Recent
          </button>
          <button 
            className={`community__tab ${feedType === 'top' ? 'isActive' : ''}`}
            onClick={() => setFeedType('top')}
          >
            <i className="fa fa-star" aria-hidden="true"></i>
            Top
          </button>
          <button 
            className={`community__tab ${feedType === 'saved' ? 'isActive' : ''}`}
            onClick={() => setFeedType('saved')}
          >
            <i className="fa fa-bookmark" aria-hidden="true"></i>
            Saved
          </button>
        </div>
      </div>

      {/* Posts List */}
      <div className="community__posts">
        {posts.map(post => (
          <PostCard 
            key={post.id} 
            post={post}
            onVote={handleVote}
            onSave={handleSave}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="community__load-more">
        <button className="community__load-btn">
          Load More Discussions
        </button>
      </div>
    </div>
  );
};