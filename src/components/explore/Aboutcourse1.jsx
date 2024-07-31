import "./aboutCourse.css";

function AboutCourse() {
  const syllabusContent = [
    {
      title: "Introduction to Communication",
      topics: [
        "Understanding the Communication Process",
        "Barriers to Effective Communication",
        "Nonverbal Communication",
      ],
    },
    {
      title: "Interpersonal Skills",
      topics: [
        "Active Listening",
        "Building Empathy",
        "Effective Questioning Techniques",
      ],
    },
    {
      title: "Public Speaking",
      topics: [
        "Overcoming Public Speaking Anxiety",
        "Structuring Your Speech",
        "Engaging Your Audience",
      ],
    },
    {
      title: "Written Communication",
      topics: [
        "Crafting Clear and Concise Messages",
        "Professional Email Etiquette",
        "Writing Persuasive Proposals",
      ],
    },
    {
      title: "Conflict Resolution",
      topics: [
        "Identifying Sources of Conflict",
        "Techniques for Managing and Resolving Conflict",
        "Mediating Disputes",
      ],
    },
    {
      title: "Cross-Cultural Communication",
      topics: [
        "Understanding Cultural Differences",
        "Communicating in a Diverse Workplace",
        "Adapting Your Communication Style",
      ],
    },
    {
      title: "Communication in Teams",
      topics: [
        "Facilitating Effective Team Meetings",
        "Collaborative Decision Making",
        "Building Trust and Rapport",
      ],
    },
  ];

  return (
    <div className="about-section">
      <div className="container">
        <h2>About Effective Communication Skills</h2>
        <p>
          Enhance your communication abilities through our comprehensive course on Effective Communication Skills. Learn essential techniques for interpersonal communication, public speaking, written communication, and more.
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
