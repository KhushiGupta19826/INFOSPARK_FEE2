import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import "../styles/Bookmarks.css";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setBookmarks(saved);
    } catch (error) {
      console.error("Error loading bookmarks:", error);
      setBookmarks([]);
    }
  }, []);

  // Remove a bookmark
  const handleRemoveBookmark = (article) => {
    const updated = bookmarks.filter(
      (b) => b.article_id !== article.article_id
    );

    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  return (
    <div className="bookmarks-page">
      <div className="bookmarks-container">
        <h1 className="bookmarks-title">My Bookmarks</h1>

        {/* Empty State */}
        {bookmarks.length === 0 && (
          <div className="empty-state">
            <p>No bookmarks yet</p>
            <p className="empty-state-subtitle">
              Start bookmarking articles from the News page!
            </p>
          </div>
        )}

        {/* Bookmarks Grid */}
        {bookmarks.length > 0 && (
          <div className="bookmarks-grid">
            {bookmarks.map((article) => (
              <NewsCard
                key={article.article_id}
                article={article}
                isBookmarked={true}
                onBookmarkToggle={handleRemoveBookmark}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
