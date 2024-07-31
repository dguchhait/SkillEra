import "./aboutCourse.css";

function AboutCourse() {
  const syllabusContent = [
    {
      title: "Introduction to C Programming",
      topics: [
        "Overview of C Programming",
        "Setting Up the Development Environment",
        "Basic Syntax and Structure",
      ],
    },
    {
      title: "Data Types and Variables",
      topics: [
        "Primitive Data Types",
        "Type Modifiers",
        "Variable Declaration and Initialization",
      ],
    },
    {
      title: "Control Structures",
      topics: [
        "Conditional Statements (if, switch)",
        "Loops (for, while, do-while)",
        "Jump Statements (break, continue)",
      ],
    },
    {
      title: "Functions",
      topics: [
        "Defining and Calling Functions",
        "Function Parameters and Return Values",
        "Scope and Lifetime of Variables",
      ],
    },
    {
      title: "Arrays and Strings",
      topics: [
        "Single-Dimensional Arrays",
        "Multi-Dimensional Arrays",
        "String Manipulation",
      ],
    },
    {
      title: "Pointers",
      topics: [
        "Understanding Pointers",
        "Pointer Arithmetic",
        "Dynamic Memory Allocation",
      ],
    },
    {
      title: "Structures and Unions",
      topics: [
        "Defining Structures",
        "Using Structures and Unions",
        "Structures vs. Unions",
      ],
    },
    {
      title: "File I/O",
      topics: [
        "Reading from and Writing to Files",
        "File Handling Functions",
        "Error Handling in File Operations",
      ],
    },
  ];

  return (
    <div className="about-section">
      <div className="container">
        <h2>About C Programming Fundamentals</h2>
        <p>
          Master the essentials of C programming with our in-depth course. Learn fundamental programming concepts, including data types, control structures, functions, and pointers. Gain practical experience through hands-on exercises to build robust and efficient applications.
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
