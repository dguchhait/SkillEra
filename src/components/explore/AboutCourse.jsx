import "./aboutCourse.css";

function AboutCourse() {
  const syllabusContent = [
    {
      title: "Linux Basics and Its Installation",
      topics: [
        "Installation of Ubuntu",
        "The Unix Architecture",
        "Basic Linux environment KDE and GNOME",
      ],
    },
    {
      title: "System Utilities",
      topics: [
        "General Purpose Utilities-I (cal, date, echo, printf, bc, script)",
        "General Purpose Utilities-II (passwd, who, uname, tty, stty etc)",
        "Command structure",
      ],
    },
    {
      title: "The File System",
      topics: [
        "File and directory management commands: mkdir, rmdir, cat, touch, rm",
        "Basic commands: cal, pwd, date, whoami, man, ls",
        "Basic commands: pwd, cd, mkdir, rmdir, cat, touch, cp, rm, mv, man, ls, clear, expr, read, su, umask, chmod, history, grep",
      ],
    },
    {
      title: "The Shell",
      topics: [
        "Pattern Matching Using Wild Cards",
        "Redirection and Pipes",
      ],
    },
    {
      title: "Filters and Regular Expressions",
      topics: [
        "Basic grep regular expression",
        "Extended grep expressions",
      ],
    },
    {
      title: "Essential System Administration",
      topics: [
        "User management commands (useradd, userdel, usermod)",
        "Group management commands (groupadd, groupdel, groupmod)",
      ],
    },
    {
      title: "Shell programming",
      topics: [
        "Shell scripts",
        "Making scripts interactive",
        "Command line arguments",
        "The logical operators",
        "If condition",
        "Using test and []",
        "Case condition",
        "While loop",
        "For loop",
        "Functions",
        "Arrays",
      ],
    },
  ];

  return (
    <div className="about-section">
      <div className="container">
        <h2>About Linux Commands and Shell Scripting</h2>
        <p>
          Gain comprehensive knowledge in Linux commands and shell scripting through our in-depth course. Master system utilities, file management, shell programming, and essential system administration tasks.
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
