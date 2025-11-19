import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loader from '../components/Loader';
import NewsCard from '../components/NewsCard';
import '../styles/News.css';

function News() {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [bookmarks, setBookmarks] = useState([]);

  const categories = ['All', 'Technology', 'Sports', 'Business', 'Health', 'Entertainment'];
  const ARTICLES_PER_PAGE = 9;

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const fetchNews = async (selectedCategory = '') => {
    setLoading(true);
    setError('');

    try {
      const categoryParam = selectedCategory ? `&category=${selectedCategory}` : '';
      const url = `https://newsdata.io/api/1/news?apikey=pub_bbddc45395d44699b1ab5ce808da07ee&language=en${categoryParam}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'success' && data.results) {
        setArticles(data.results);
        setFilteredArticles(data.results);
      } else {
        setError('Failed to fetch news articles');
      }
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleCategoryChange = (cat) => {
    const selectedCategory = cat === 'All' ? '' : cat.toLowerCase();
    setCategory(selectedCategory);
    setCurrentPage(1);
    setSearchTerm('');
    fetchNews(selectedCategory);
  };

  useEffect(() => {
    if (searchTerm) {
      const filtered = articles.filter((article) => {
        const title = article.title?.toLowerCase() || '';
        const description = article.description?.toLowerCase() || '';
        const search = searchTerm.toLowerCase();
        return title.includes(search) || description.includes(search);
      });
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
    setCurrentPage(1);
  }, [searchTerm, articles]);

  const handleBookmarkToggle = (article) => {
    const exists = bookmarks.some((b) => b.article_id === article.article_id);

    let updated;
    if (exists) {
      updated = bookmarks.filter((b) => b.article_id !== article.article_id);
    } else {
      updated = [...bookmarks, article];
    }

    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  const isArticleBookmarked = (id) => {
    return bookmarks.some((b) => b.article_id === id);
  };

  const indexLast = currentPage * ARTICLES_PER_PAGE;
  const indexFirst = indexLast - ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  return (
    <div className="news-page">
      <div className="news-container">
        <button className="back-button" onClick={() => navigate('/dashboard')}>
          <FaArrowLeft /> Back to Dashboard
        </button>

        <h1 className="news-title">Latest News</h1>

        {/* ⭐ Go to Bookmarks Button */}
        <div className="bookmark-nav-btn-container">
          <button
            className="bookmark-nav-btn"
            onClick={() => navigate('/bookmarks')}
          >
            ⭐ View Bookmarks
          </button>
        </div>

        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${
                category === (cat === 'All' ? '' : cat.toLowerCase()) ? 'active' : ''
              }`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="news-content">
          {loading && <Loader />}
          {error && <div className="error-message"><p>{error}</p></div>}

          {!loading && !error && filteredArticles.length === 0 && (
            <div className="empty-state">
              <p>No articles found</p>
            </div>
          )}

          {!loading && !error && filteredArticles.length > 0 && (
            <>
              <div className="articles-grid">
                {currentArticles.map((article) => (
                  <NewsCard
                    key={article.article_id}
                    article={article}
                    isBookmarked={isArticleBookmarked(article.article_id)}
                    onBookmarkToggle={handleBookmarkToggle}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    className="pagination-btn"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </button>

                  <span className="pagination-info">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    className="pagination-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
