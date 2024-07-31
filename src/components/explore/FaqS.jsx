import React, { useState } from 'react';
import './Faq.css';

const questions = [
  { question: 'When will I receive confirmation of my registration?', answer: 'Confirmation will be sent to you by the Sunday following your registration.' },
  { question: 'How do I obtain the certificate for the Stock Market course?', answer: 'After completing the course modules, send us an email. An exam will be scheduled, and upon passing the exam, you will receive your certificate.' },
  { question: 'What is the duration of the Stock Market course?', answer: 'The duration depends on the pace at which you complete the modules. Please refer to the course details on our website for specific information.' },
  { question: 'Are the Stock Market courses self-paced or instructor-led?', answer: 'Our Stock Market course is primarily self-paced, with optional live sessions with market experts.' },
  { 
    question: 'Is there support available if I have questions during the course?',
    answer: 'Yes, we offer email and forum support for all students enrolled in our courses.'
  },
  { 
    question: 'Will I have opportunities to practice stock market skills?',
    answer: 'Yes, the course includes practical exercises, simulated trading scenarios, and assignments to help you apply and refine your stock market skills.'
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
