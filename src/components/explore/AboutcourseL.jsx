import "./aboutCourse.css";

function AboutCourse() {
  const syllabusContent = [
    {
      title: "Introduction to Leadership",
      topics: [
        "Defining Leadership",
        "Leadership vs. Management",
        "Theories of Leadership",
      ],
    },
    {
      title: "Effective Communication",
      topics: [
        "The Role of Communication in Leadership",
        "Active Listening Skills",
        "Delivering Clear and Persuasive Messages",
      ],
    },
    {
      title: "Team Management",
      topics: [
        "Building and Leading Teams",
        "Delegation Strategies",
        "Motivating Team Members",
      ],
    },
    {
      title: "Decision Making",
      topics: [
        "Decision-Making Models",
        "Problem-Solving Techniques",
        "Ethical Decision Making",
      ],
    },
    {
      title: "Conflict Resolution",
      topics: [
        "Understanding Conflict",
        "Conflict Resolution Strategies",
        "Mediating Disputes",
      ],
    },
    {
      title: "Emotional Intelligence",
      topics: [
        "Self-Awareness and Self-Regulation",
        "Empathy in Leadership",
        "Building Emotional Intelligence",
      ],
    },
    {
      title: "Strategic Thinking",
      topics: [
        "Visionary Leadership",
        "Setting Strategic Goals",
        "Implementing Change",
      ],
    },
  ];

  return (
    <div className="about-section">
      <div className="container">
        <h2>About Leadership Fundamentals</h2>
        <p>
          Develop your leadership skills with our comprehensive Leadership Fundamentals course. Gain insights into effective communication, team management, decision making, and more to lead with confidence and impact.
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
