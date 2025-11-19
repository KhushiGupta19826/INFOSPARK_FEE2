import React from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import './NewsCard.css';

const NewsCard = ({ article, isBookmarked, onBookmarkToggle }) => {
  // Truncate description to 150 characters
  const truncateText = (text, maxLength) => {
    if (!text) return 'No description available';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Fallback placeholder image
  const placeholderImage = 'https://via.placeholder.com/400x250?text=No+Image+Available';

  return (
    <div className="news-card">
      <div className="news-card-image-container">
        <img 
          src={article.image_url || placeholderImage} 
          alt={article.title}
          className="news-card-image"
          onError={(e) => {
            e.target.src = placeholderImage;
          }}
        />
      </div>
      
      <div className="news-card-content">
        <h3 className="news-card-title">{article.title}</h3>
        <p className="news-card-description">
          {truncateText(article.description, 150)}
        </p>
        
        <div className="news-card-actions">
          <a 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="news-card-read-more"
          >
            Read More
          </a>
          
          <button 
            className="news-card-bookmark-btn"
            onClick={() => onBookmarkToggle(article)}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
