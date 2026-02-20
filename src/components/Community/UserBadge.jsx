import React from "react";
import "./styles/user-badge.css";

export const UserBadge = ({ badges, size = "small" }) => {
  if (!badges || badges.length === 0) return null;

  const badgeColors = {
    "Top Contributor": "var(--community-blue)",
    "Funding Expert": "#ffaa00",
    "VC": "#00c48c",
    "Legal Expert": "#aa66cc",
    "SaaS Expert": "#ff8a5c",
    "Biotech": "#5c9eff",
    "Cash Flow Expert": "#ff6b6b",
    "Pitch Expert": "#a3a0ff",
    default: "rgba(255, 255, 255, 0.25)"
  };

  return (
    <div className={`userBadge userBadge--${size}`}>
      {badges.map((badge, index) => (
        <span 
          key={index} 
          className="userBadge__item"
          style={{ 
            backgroundColor: badgeColors[badge] || badgeColors.default,
            borderColor: badgeColors[badge] || badgeColors.default
          }}
          title={badge}
        >
          <i className="fa fa-certificate" aria-hidden="true"></i>
          {size !== "small" && <span>{badge}</span>}
        </span>
      ))}
    </div>
  );
};