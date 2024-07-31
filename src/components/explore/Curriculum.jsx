import React from 'react';
import './Curriculum.css';

const Offerings = () => {
  return (
    <div className="offerings-container">
      <h1>Our Offerings</h1>
      <div className="offerings-content">
        
        <div className="offerings-grid">
          <div className="offering">
            <h3>Session by</h3>
            <p> Md Ali Azgar(Certified Ethical hacker)</p>
          </div>
          <div className="offering">
            <h3>Project Portfolio</h3>
            <p>Build job-ready profile with dynamic project portfolio</p>
          </div>
          <div className="offering">
            <h3>Interview Opportunities</h3>
            <p>Get interviews for desired roles in the top companies</p>
          </div>
          <div className="offering">
            <h3>Alumni Network</h3>
            <p>Leverage high-impact alumni network of PW Skills learners</p>
          </div>
          <div className="offering">
            <h3>Career Growth</h3>
            <p>Get opportunities to elevate and fast-track your career</p>
          </div>
          <div className="offering">
            <h3>Certification</h3>
            <p> Course completion certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
