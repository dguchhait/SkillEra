import React from 'react';
import './Curriculum1.css';

const Offerings = () => {
  return (
    <div className="offerings-container">
      <h1>Our Offerings</h1>
      <div className="offerings-content">
        
        <div className="offerings-grid">
          <div className="offering">
            <h3>Leadership Workshops</h3>
            <p>Participate in hands-on workshops designed to develop your leadership skills.</p>
          </div>
          <div className="offering">
            <h3>Expert Lectures</h3>
            <p>Gain insights from experienced leaders and industry professionals.</p>
          </div>
          <div className="offering">
            <h3>Case Studies</h3>
            <p>Analyze real-world leadership scenarios and learn from successful strategies.</p>
          </div>
          <div className="offering">
            <h3>Personalized Coaching</h3>
            <p>Receive one-on-one coaching to refine your leadership approach.</p>
          </div>
          <div className="offering">
            <h3>Team Projects</h3>
            <p>Work on team projects to apply leadership principles in a collaborative setting.</p>
          </div>
          <div className="offering">
            <h3>Certification</h3>
            <p>Earn a certificate upon course completion to demonstrate your leadership skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
