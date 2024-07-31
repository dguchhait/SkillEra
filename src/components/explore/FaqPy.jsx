import React, { useState } from 'react';
import './Faq.css';

const questions = [
  { question: 'When will I receive confirmation of my registration?', answer: 'Confirmation will be sent to you by the Sunday following your registration.' },
  { question: 'How do I obtain the certificate for the Python course?', answer: 'After completing the course modules, send us an email. An exam will be scheduled, and upon passing the exam, you will receive your certificate.' },
  { question: 'What is the duration of the Python course?', answer: 'The duration depends on the pace at which you complete the modules. Please refer to the course details on our website for specific information.' },
  { question: 'Are the Python courses self-paced or instructor-led?', answer: 'Our Python course is primarily self-paced, with optional live coding sessions with Python experts.' },
  { 
    question: 'Is there support available if I have questions during the course?',
    answer: 'Yes, we offer email and forum support for all students enrolled in our courses.'
  },
  { 
    question: 'Will I have opportunities to practice my Python programming skills?',
    answer: 'Yes, the course includes coding exercises, projects, and assignments to help you apply and refine your Python programming skills.'
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
