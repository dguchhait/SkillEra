import "./aboutCourse.css";

function AboutCourse() {
  const syllabusContent = [
    {
      title: "Introduction to Python",
      topics: [
        "Overview of Python Programming",
        "Setting Up the Development Environment",
        "Basic Syntax and Structure",
      ],
    },
    {
      title: "Data Types and Variables",
      topics: [
        "Understanding Python Data Types",
        "Working with Variables",
        "Type Conversion and Casting",
      ],
    },
    {
      title: "Control Flow",
      topics: [
        "Conditional Statements (if, elif, else)",
        "Loops (for, while)",
        "Exception Handling",
      ],
    },
    {
      title: "Functions and Modules",
      topics: [
        "Defining and Using Functions",
        "Built-in Functions",
        "Creating and Importing Modules",
      ],
    },
    {
      title: "Data Structures",
      topics: [
        "Lists and Tuples",
        "Dictionaries and Sets",
        "List Comprehensions",
      ],
    },
    {
      title: "File Handling",
      topics: [
        "Reading from and Writing to Files",
        "Working with File Paths",
        "Exception Handling in File Operations",
      ],
    },
    {
      title: "Libraries and Frameworks",
      topics: [
        "Introduction to Popular Libraries (e.g., NumPy, Pandas)",
        "Using Frameworks (e.g., Flask, Django)",
        "Installing and Managing Packages with pip",
      ],
    },
  ];

  return (
    <div className="about-section">
      <div className="container">
        <h2>About Python Programming</h2>
        <p>
          Dive into the world of Python programming with our comprehensive course. Learn fundamental programming concepts, work with data types and structures, handle files, and explore popular libraries and frameworks to build robust Python applications.
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
