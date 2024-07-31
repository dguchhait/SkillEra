import React from 'react';
import './Curriculum1.css';

const Offerings = () => {
  return (
    <div className="offerings-container">
      <h1>Our Offerings</h1>
      <div className="offerings-content">
        <div className="offerings-grid">
          <div className="offering">
            <h3>Market Analysis Workshops</h3>
            <p>Participate in interactive workshops to master market analysis techniques and interpret market trends effectively.</p>
          </div>
          <div className="offering">
            <h3>Investment Strategy Seminars</h3>
            <p>Gain insights from financial experts on developing successful investment strategies and portfolio management.</p>
          </div>
          <div className="offering">
            <h3>Risk Management Techniques</h3>
            <p>Learn essential strategies for managing risk and protecting your investments.</p>
          </div>
          <div className="offering">
            <h3>Trading Techniques Sessions</h3>
            <p>Receive hands-on training in various trading techniques and tools to enhance your trading skills.</p>
          </div>
          <div className="offering">
            <h3>Personalized Investment Coaching</h3>
            <p>Get one-on-one coaching to tailor investment strategies to your personal goals and risk tolerance.</p>
          </div>
          <div className="offering">
            <h3>Certification</h3>
            <p>Earn a certificate upon completion to validate your skills in stock market investing and trading.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
