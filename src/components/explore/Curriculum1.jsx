import React from 'react';
import './Curriculum1.css';

const Offerings = () => {
  return (
    <div className="offerings-container">
      <h1>Our Offerings</h1>
      <div className="offerings-content">
        
        <div className="offerings-grid">
          <div className="offering">
            <h3>Expert Sessions</h3>
            <p>Learn from seasoned communication experts and industry leaders.</p>
          </div>
          <div className="offering">
            <h3>Practical Workshops</h3>
            <p>Engage in interactive workshops to practice and refine your communication skills.</p>
          </div>
          <div className="offering">
            <h3>Personalized Feedback</h3>
            <p>Receive constructive feedback on your communication style and presentations.</p>
          </div>
          <div className="offering">
            <h3>Networking Opportunities</h3>
            <p>Connect with professionals and peers to build a strong network.</p>
          </div>
          <div className="offering">
            <h3>Career Advancement</h3>
            <p>Enhance your career prospects with improved communication skills.</p>
          </div>
          <div className="offering">
            <h3>Certification</h3>
            <p>Earn a certificate upon course completion to showcase your skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
