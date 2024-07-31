import React from 'react';
import './Curriculum1.css';

const Offerings = () => {
  return (
    <div className="offerings-container">
      <h1>Our Offerings</h1>
      <div className="offerings-content">
        <div className="offerings-grid">
          <div className="offering">
            <h3>Budgeting Workshops</h3>
            <p>Participate in interactive workshops to master the art of budgeting and expense tracking.</p>
          </div>
          <div className="offering">
            <h3>Investment Seminars</h3>
            <p>Gain insights from financial experts on investment strategies and portfolio management.</p>
          </div>
          <div className="offering">
            <h3>Debt Management Strategies</h3>
            <p>Learn effective techniques for managing and reducing personal debt.</p>
          </div>
          <div className="offering">
            <h3>Retirement Planning Sessions</h3>
            <p>Receive guidance on planning for a secure and financially stable retirement.</p>
          </div>
          <div className="offering">
            <h3>Personalized Financial Coaching</h3>
            <p>Get one-on-one coaching to tailor financial strategies to your personal goals.</p>
          </div>
          <div className="offering">
            <h3>Certification</h3>
            <p>Earn a certificate upon completion to validate your skills in personal finance and money management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
