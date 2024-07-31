import "./aboutCourse.css";

function AboutCourse() {
  const syllabusContent = [
    {
      title: "Introduction to the Stock Market",
      topics: [
        "Understanding the Stock Market",
        "How the Stock Market Works",
        "Key Terminologies and Concepts",
      ],
    },
    {
      title: "Stock Market Basics",
      topics: [
        "Types of Stocks",
        "Stock Exchanges and Indices",
        "How to Buy and Sell Stocks",
      ],
    },
    {
      title: "Investment Strategies",
      topics: [
        "Long-Term vs. Short-Term Investing",
        "Fundamental Analysis",
        "Technical Analysis",
      ],
    },
    {
      title: "Risk Management",
      topics: [
        "Understanding Market Risks",
        "Diversification Strategies",
        "Risk Assessment and Mitigation",
      ],
    },
    {
      title: "Trading Techniques",
      topics: [
        "Day Trading vs. Swing Trading",
        "Order Types and Execution",
        "Trading Platforms and Tools",
      ],
    },
    {
      title: "Analyzing Market Trends",
      topics: [
        "Interpreting Market Data",
        "Economic Indicators",
        "Market Sentiment and News Impact",
      ],
    },
    {
      title: "Building a Stock Portfolio",
      topics: [
        "Portfolio Diversification",
        "Selecting Stocks for Growth",
        "Monitoring and Rebalancing Your Portfolio",
      ],
    },
  ];

  return (
    <div className="about-section">
      <div className="container">
        <h2>About Stock Market Investing</h2>
        <p>
          Dive into the world of stock market investing with our comprehensive course. Gain a thorough understanding of stock market fundamentals, investment strategies, risk management, and trading techniques to make informed investment decisions and build a successful portfolio.
        </p>
        <div className="features-grid">
          {syllabusContent.map((module, index) => (
            <div className="feature-item" key={index}>
              <i className="bi bi-check-circle-fill"></i>
              <div>
                <h5>{module.title}</h5>
                <ul>
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutCourse;
