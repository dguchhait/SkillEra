import "./aboutCourse.css";

function AboutCourse() {
  const syllabusContent = [
    {
      title: "Introduction to Personal Finance",
      topics: [
        "Understanding Personal Finance",
        "Setting Financial Goals",
        "The Importance of Financial Planning",
      ],
    },
    {
      title: "Budgeting and Saving",
      topics: [
        "Creating a Budget",
        "Tracking Expenses",
        "Effective Saving Strategies",
      ],
    },
    {
      title: "Debt Management",
      topics: [
        "Understanding Different Types of Debt",
        "Strategies for Paying Down Debt",
        "Managing Credit Scores",
      ],
    },
    {
      title: "Investment Planning",
      topics: [
        "Introduction to Investments",
        "Types of Investments",
        "Building a Diversified Portfolio",
      ],
    },
    {
      title: "Retirement Planning",
      topics: [
        "Understanding Retirement Accounts",
        "Planning for Retirement Income",
        "Strategies for Growing Your Retirement Savings",
      ],
    },
    {
      title: "Insurance and Risk Management",
      topics: [
        "Types of Insurance",
        "Assessing Insurance Needs",
        "Managing Financial Risks",
      ],
    },
    {
      title: "Tax Planning",
      topics: [
        "Basics of Taxation",
        "Tax-Advantaged Accounts",
        "Strategies for Minimizing Taxes",
      ],
    },
  ];

  return (
    <div className="about-section">
      <div className="container">
        <h2>About Personal Finance and Money Management</h2>
        <p>
          Master the essentials of personal finance with our in-depth course on Money Management. Learn how to budget effectively, manage debt, invest wisely, plan for retirement, and more to secure your financial future and achieve your financial goals.
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
