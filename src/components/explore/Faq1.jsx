import React, { useState } from 'react';
import './Faq.css';

const questions = [
  { question: 'When will I get the confirmation for my registration?', answer: 'You will receive confirmation by the Sunday following your registration.' },
  { question: 'How do I get the certificate for the Effective Communication Skills course?', answer: 'After completing the course modules, send us an email. An exam will be scheduled, and upon passing the exam, you will receive your certificate.' },
  { question: 'What is the duration of the Effective Communication Skills course?', answer: 'The duration varies based on the pace at which you complete the modules. Please check the course details on our website for specific information.' },
  { question: 'Are the Effective Communication Skills courses self-paced or instructor-led?', answer: 'Our Effective Communication Skills course is primarily self-paced, but we also offer occasional live sessions with communication experts.' },
  { 
    question: 'Is there any support available if I have questions during the Effective Communication Skills course?',
    answer: 'Yes, we offer email and forum support for all students enrolled in our courses.'
  },
  { 
    question: 'Will I have opportunities to practice my communication skills?',
    answer: 'Yes, the course includes interactive exercises, role-playing scenarios, and practical assignments to help you practice and refine your communication skills.'
  },
];

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        <div className="faq-questions">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`faq-question ${selectedQuestion === index ? 'active' : ''}`}
              onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
            >
              {item.question}
              <span className="arrow">&#8250;</span>
            </div>
          ))}
        </div>
        <div className="faq-answer">
          {selectedQuestion !== null && (
            <p>{questions[selectedQuestion].answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
