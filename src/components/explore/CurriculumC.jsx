import React from 'react';
import './Curriculum1.css';

const Offerings = () => {
  return (
    <div className="offerings-container">
      <h1>Our Offerings</h1>
      <div className="offerings-content">
        
        <div className="offerings-grid">
          <div className="offering">
            <h3>C Programming Fundamentals</h3>
            <p>Get started with the basics of C programming, including syntax, data types, and control structures.</p>
          </div>
          <div className="offering">
            <h3>Advanced C Programming</h3>
            <p>Deepen your understanding of C with topics such as pointers, dynamic memory management, and advanced data structures.</p>
          </div>
          <div className="offering">
            <h3>Hands-On Coding Sessions</h3>
            <p>Participate in coding sessions to apply your knowledge through practical exercises and projects.</p>
          </div>
          <div className="offering">
            <h3>Expert Guidance</h3>
            <p>Receive support and insights from experienced C programmers to help you overcome challenges and enhance your skills.</p>
          </div>
          <div className="offering">
            <h3>Project-Based Learning</h3>
            <p>Work on real-world projects to gain practical experience and showcase your C programming skills.</p>
          </div>
          <div className="offering">
            <h3>Certification</h3>
            <p>Earn a certificate upon successful completion of the course to validate your proficiency in C programming.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
