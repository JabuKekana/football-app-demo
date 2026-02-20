import React from "react";
import { Link } from "react-router-dom";
import "./styles/topic-tags.css";

export const TopicTags = ({ topics, size = "medium", interactive = true }) => {
  const topicColors = {
    "Funding Tips": "#6ad7ff",
    "Business Loans": "#2fb8ff",
    "Cash Flow": "#00c48c",
    "Tax Strategy": "#ffaa00",
    "Growth Hacks": "#ff8a5c",
    "Pitch Decks": "#a3a0ff",
    "Investor Ready": "#aa66cc",
    "Financial Models": "#5c9eff",
    default: "rgba(255, 255, 255, 0.25)"
  };

  if (!topics || topics.length === 0) return null;

  return (
    <div className={`topicTags topicTags--${size}`}>
      {topics.map((topic, index) => {
        const Tag = interactive ? Link : 'span';
        const props = interactive 
          ? { to: `/community/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`, className: "topicTags__item" }
          : { className: "topicTags__item" };

        return (
          <Tag 
            key={index} 
            {...props}
            style={{ 
              backgroundColor: `${topicColors[topic] || topicColors.default}20`,
              borderColor: topicColors[topic] || topicColors.default,
              color: topicColors[topic] || 'rgba(255, 255, 255, 0.9)'
            }}
          >
            {topic}
          </Tag>
        );
      })}
    </div>
  );
};