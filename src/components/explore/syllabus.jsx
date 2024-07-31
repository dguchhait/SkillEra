import React, { useState } from 'react';
import "./syllabus.css";

function Syllabus() {
  const [activeTab, setActiveTab] = useState('Linux Basics and Its Installation');

  const tabs = [
    'Linux Basics and Its Installation', 'System Utilities', 'The File System', 'The Shell', 'Filters and Regular Expressions', 'Essential System Administration', 'Shell programming'
  ];

  const curriculumContent = {
    'Linux Basics and Its Installation': [
      'Installation of Ubuntu',
      'The Unix Architecture',
      'Basic Linux environment KDE and GNOME'
    ],
    'System Utilities': [
      'General Purpose Utilities-I(cal, date, echo, printf, bc, script)',
      'General Purpose Utilities-II(passwd, who, uname, tty, stty etc)',
      'Command structure'
    ],
    'The File System': [
      'File and directory management commands: mkdir, rmdir, cat, touch, rm',
      'Basic commands: cal, pwd, date, whoami, man, ls',
      'Basic commands: pwd, cd, mkdir, rmdir, cat, touch, cp, rm, mv, man, ls, clear, expr, read, su, umask, chmod, history, grep'
    ],
    'The Shell': [
      'Pattern Matching Using Wild Cards',
      'Redirection and Pipes'
    ],
    'Filters and Regular Expressions': [
      'Basic grep regular expression',
      'Extended grep expressions'
    ],
    'Essential System Administration': [
      'User management commands (useradd, userdel, usermod)',
      'Group management commands (groupadd, groupdel, groupmod)'
    ],
    'Shell programming': [
      'Shell scripts',
      'Making scripts interactive',
      'Command line arguments',
      'The logical operators',
      'If condition',
      'Using test and []',
      'Case condition',
      'While loop',
      'For loop',
      'Functions',
      'Arrays'
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="curriculum-section">
      <h1 className="text-center">Curriculum Guide</h1>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content">
        <div className="module-list">
          {Object.keys(curriculumContent).map((module, index) => (
            <div
              key={index}
              className={`module-item ${activeTab === module ? 'active' : ''}`}
              onClick={() => handleTabClick(module)}
            >
              <h2>{module}</h2>
              <ul>
                {curriculumContent[module].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="lecture-list">
          {curriculumContent[activeTab]?.map((lecture, index) => (
            <div key={index} className="lecture-item">
              {lecture}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
