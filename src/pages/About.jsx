import { useState } from 'react';
import { Sparkles, Cloud, Bookmark, Users, ChevronDown } from 'lucide-react';

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is InfoSpark?",
      answer:
        "InfoSpark is a real-time Weather and News application that provides accurate climate data and trending news based on user preferences.",
      icon: Sparkles
    },
    {
      question: "How does the Weather feature work?",
      answer:
        "The weather module fetches real-time temperature, humidity, wind speed, and gives a 5-day forecast using external weather APIs.",
      icon: Cloud
    },
    {
      question: "Can I bookmark news articles?",
      answer:
        "Yes! The News module allows users to search topics and bookmark articles for later reading.",
      icon: Bookmark
    },
    {
      question: "Do I need an account?",
      answer:
        "Yes, users must sign up to access the personalized dashboard, weather tracking, and bookmarks.",
      icon: Users
    }
  ];

  const team = [
    {
      name: "Member 1",
      role: "Frontend Developer",
      img: "/images/member1.jpg",
      about:
        "Specializes in building responsive UI using React, Tailwind, and modern JavaScript. Creates seamless user experiences.",
      color: "blue-purple"
    },
    {
      name: "Member 2",
      role: "UI/UX Designer",
      img: "/images/member2.jpg",
      about:
        "Designs intuitive interfaces and user flows. Focuses on creating visually stunning and user-friendly experiences.",
      color: "green-teal"
    },
    {
      name: "Member 3",
      role: "Frontend Developer",
      img: "/images/member3.jpg",
      about:
        "Works on component architecture, API integrations, and ensures optimal performance across all devices.",
      color: "orange-red"
    },
    {
      name: "Member 4",
      role: "Project Manager & Designer",
      img: "/images/member4.jpg",
      about:
        "Manages project timeline, creates design systems, and oversees documentation and team coordination.",
      color: "pink-rose"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #e0e7ff 100%);
          position: relative;
          overflow: hidden;
        }

        .bg-blob {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(60px);
          animation: pulse 3s infinite;
          pointer-events: none;
        }

        .bg-blob-1 {
          top: 80px;
          left: 40px;
          width: 288px;
          height: 288px;
          background: #60a5fa;
          animation-delay: 0s;
        }

        .bg-blob-2 {
          bottom: 80px;
          right: 40px;
          width: 384px;
          height: 384px;
          background: #818cf8;
          animation-delay: 1s;
        }

        .bg-blob-3 {
          top: 50%;
          left: 50%;
          width: 320px;
          height: 320px;
          background: #a78bfa;
          animation-delay: 2s;
        }

        .hero-section {
          position: relative;
          padding: 96px 32px 80px;
        }

        .hero-content {
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(90deg, #3b82f6, #6366f1);
          color: white;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 32px;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          transition: all 0.3s;
          cursor: default;
        }

        .badge:hover {
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
          transform: scale(1.05);
        }

        .badge-icon {
          animation: spin 3s linear infinite;
        }

        .hero-title {
          font-size: 72px;
          font-weight: 800;
          background: linear-gradient(90deg, #2563eb, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 32px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 24px;
          color: #4b5563;
          max-width: 768px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 768px;
          margin: 48px auto 0;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.3s;
        }

        .stat-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .stat-value {
          font-size: 30px;
          font-weight: 700;
          background: linear-gradient(90deg, #2563eb, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 14px;
          color: #4b5563;
          margin-top: 4px;
        }

        .section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px;
          position: relative;
          z-index: 10;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-divider {
          width: 64px;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #4f46e5);
          border-radius: 9999px;
          margin: 0 auto 16px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 24px;
        }

        .section-subtitle {
          font-size: 20px;
          color: #4b5563;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.5s;
        }

        .faq-item:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .faq-button {
          width: 100%;
          padding: 28px;
          border: none;
          background: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 20px;
          text-align: left;
          transition: all 0.3s;
        }

        .faq-button:hover {
          background: linear-gradient(90deg, #eff6ff, #eef2ff);
        }

        .faq-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #3b82f6, #4f46e5);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .faq-item:hover .faq-icon {
          transform: scale(1.1) rotate(6deg);
        }

        .faq-question {
          flex: 1;
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          transition: color 0.3s;
        }

        .faq-item:hover .faq-question {
          color: #4f46e5;
        }

        .faq-chevron {
          transition: all 0.5s;
          color: #9ca3af;
        }

        .faq-item:hover .faq-chevron {
          color: #4f46e5;
        }

        .faq-chevron.open {
          transform: rotate(180deg);
          color: #4f46e5;
        }

        .faq-answer {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.5s ease-in-out;
        }

        .faq-answer.open {
          max-height: 192px;
          opacity: 1;
        }

        .faq-answer-content {
          padding: 0 28px 28px 96px;
          font-size: 18px;
          color: #4b5563;
          line-height: 1.6;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
        }

        .team-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.5s;
        }

        .team-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          transform: translateY(-12px) scale(1.05);
        }

        .team-card-accent {
          height: 6px;
        }

        .accent-blue-purple {
          background: linear-gradient(90deg, #3b82f6, #a855f7);
        }

        .accent-green-teal {
          background: linear-gradient(90deg, #22c55e, #14b8a6);
        }

        .accent-orange-red {
          background: linear-gradient(90deg, #f97316, #ef4444);
        }

        .accent-pink-rose {
          background: linear-gradient(90deg, #ec4899, #f43f5e);
        }

        .team-card-content {
          padding: 24px;
        }

        .team-image-wrapper {
          position: relative;
          margin-bottom: 20px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .team-image {
          width: 100%;
          height: 224px;
          object-fit: cover;
          transition: transform 0.7s;
        }

        .team-card:hover .team-image {
          transform: scale(1.1);
        }

        .team-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .team-card:hover .team-image-overlay {
          opacity: 1;
        }

        .team-image-hint {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 8px 12px;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          color: #374151;
          transform: translateY(16px);
          opacity: 0;
          transition: all 0.5s;
        }

        .team-card:hover .team-image-hint {
          transform: translateY(0);
          opacity: 1;
        }

        .team-name {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
          transition: color 0.3s;
        }

        .team-card:hover .team-name {
          color: #4f46e5;
        }

        .team-role {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .role-blue-purple {
          background: linear-gradient(90deg, #3b82f6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .role-green-teal {
          background: linear-gradient(90deg, #22c55e, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .role-orange-red {
          background: linear-gradient(90deg, #f97316, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .role-pink-rose {
          background: linear-gradient(90deg, #ec4899, #f43f5e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .team-divider {
          height: 4px;
          width: 48px;
          background: linear-gradient(90deg, #d1d5db, transparent);
          border-radius: 9999px;
          transition: width 0.5s;
        }

        .team-card:hover .team-divider {
          width: 100%;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 16px;
          animation: fadeIn 0.3s;
        }

        .modal {
          background: white;
          border-radius: 24px;
          width: 100%;
          max-width: 512px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          animation: zoomIn 0.3s;
        }

        .modal-accent {
          height: 8px;
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          font-size: 24px;
          color: #4b5563;
          font-weight: 300;
        }

        .modal-close:hover {
          background: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transform: scale(1.1);
        }

        .modal-content {
          padding: 32px;
        }

        .modal-image-wrapper {
          position: relative;
          margin-bottom: 24px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .modal-image {
          width: 100%;
          height: 256px;
          object-fit: cover;
        }

        .modal-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .modal-name {
          font-size: 36px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 12px;
        }

        .modal-role-wrapper {
          display: inline-block;
        }

        .modal-role {
          font-size: 18px;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 9999px;
          border: 2px solid;
        }

        .modal-about {
          background: linear-gradient(135deg, #f9fafb, #dbeafe);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e5e7eb;
          text-align: center;
          font-size: 18px;
          color: #374151;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 48px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 36px;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
        
        
        <div className="hero-section">
          <div className="hero-content">
            <div className="badge">
              <Sparkles className="badge-icon" size={16} />
              <span>About InfoSpark</span>
            </div>
            <h1 className="hero-title">
              Your Gateway to<br />Real-Time Information
            </h1>
            <p className="hero-subtitle">
              Combining weather intelligence and news curation in one powerful, beautifully designed platform
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">Real-Time</div>
                <div className="stat-label">Weather Data</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">1000+</div>
                <div className="stat-label">News Sources</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">50K+</div>
                <div className="stat-label">Daily Users</div>
              </div>
            </div>
          </div>
        </div>

        
        <section className="section">
          <div className="section-header">
            <div className="section-divider"></div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about InfoSpark</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openFaq === index;
              
              return (
                <div key={index} className="faq-item">
                  <button
                    className="faq-button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <div className="faq-icon">
                      <Icon size={28} color="white" />
                    </div>
                    <div className="faq-question">{faq.question}</div>
                    <ChevronDown 
                      className={`faq-chevron ${isOpen ? 'open' : ''}`}
                      size={24}
                    />
                  </button>
                  
                  <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                    <div className="faq-answer-content">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        
        <section className="section">
          <div className="section-header">
            <div className="section-divider"></div>
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">The talented people behind InfoSpark</p>
          </div>

          <div className="team-grid">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="team-card"
                onClick={() => setSelectedMember(member)}
              >
                <div className={`team-card-accent accent-${member.color}`}></div>
                
                <div className="team-card-content">
                  <div className="team-image-wrapper">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-image"
                      onError={(e) => {
                        e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`;
                      }}
                    />
                    <div className="team-image-overlay"></div>
                    <div className="team-image-hint">
                      Click to learn more
                    </div>
                  </div>
                  
                  <h3 className="team-name">{member.name}</h3>
                  <p className={`team-role role-${member.color}`}>
                    {member.role}
                  </p>
                  <div className="team-divider"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        {selectedMember && (
          <div 
            className="modal-overlay"
            onClick={() => setSelectedMember(null)}
          >
            <div 
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`modal-accent accent-${selectedMember.color}`}></div>
              
              <button
                className="modal-close"
                onClick={() => setSelectedMember(null)}
              >
                ✕
              </button>

              <div className="modal-content">
                <div className="modal-image-wrapper">
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    className="modal-image"
                    onError={(e) => {
                      e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedMember.name}`;
                    }}
                  />
                  <div className="modal-image-gradient"></div>
                </div>

                <div className="modal-header">
                  <h3 className="modal-name">{selectedMember.name}</h3>
                  <div className="modal-role-wrapper">
                    <p className={`modal-role role-${selectedMember.color}`}>
                      {selectedMember.role}
                    </p>
                  </div>
                </div>
                
                <div className="modal-about">
                  {selectedMember.about}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
