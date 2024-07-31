import React from 'react';
import './Curriculum1.css';

const Offerings = () => {
  return (
    <div className="offerings-container">
      <h1>Our Offerings</h1>
      <div className="offerings-content">
        <div className="offerings-grid">
          <div className="offering">
            <h3>Python Basics Workshops</h3>
            <p>Participate in hands-on workshops to learn the fundamentals of Python programming.</p>
          </div>
          <div className="offering">
            <h3>Advanced Python Seminars</h3>
            <p>Gain insights into advanced Python topics such as data analysis, machine learning, and web development.</p>
          </div>
          <div className="offering">
            <h3>Project-Based Learning</h3>
            <p>Work on real-world projects to apply your Python skills and solve practical problems.</p>
          </div>
          <div className="offering">
            <h3>Code Review Sessions</h3>
            <p>Receive feedback on your code from experienced Python developers to improve your programming skills.</p>
          </div>
          <div className="offering">
            <h3>Personalized Mentoring</h3>
            <p>Get one-on-one mentoring to tailor your learning experience and achieve your programming goals.</p>
          </div>
          <div className="offering">
            <h3>Certification</h3>
            <p>Earn a certificate upon course completion to showcase your Python programming skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
