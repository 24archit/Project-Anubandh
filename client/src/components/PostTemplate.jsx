import React from "react";
import "../assets/styles/PostTemplate.css";
import { FaHeart, FaShare, FaRetweet, FaBookmark } from "react-icons/fa";

const PostTemplate = ({ username, caption, media }) => {
  return (
    <div className="post-container">
      {/* Profile Section */}
      <div className="post-header">
        <img
          src={`https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7`} // Placeholder avatar
          alt={`${username}'s profile`}
          className="profile-avatar"
        />
        <div className="profile-info">
          <span className="username">{username}</span>
        </div>
      </div>

      {/* Caption */}
      <div className="post-caption">
        <p>{caption}</p>
      </div>

      {/* Media Section */}
      <div className="post-media">
        <img src={media} alt="Post media" className="post-image" />
      </div>

      {/* Action Buttons */}
      <div className="post-actions">
        <FaHeart className="action-icon" title="Like" />
        <FaShare className="action-icon" title="Share" />
        <FaRetweet className="action-icon" title="Repost" />
        <FaBookmark className="action-icon" title="Save" />
      </div>
    </div>
  );
};

export default PostTemplate;
