import "./faculty.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Faculty = () => {
  const facultyData = [
    {
      name: "Ms Mayank Yadav",
      role: "Python Expert",
      company: "Fractal | Deloitte | Capgemini",
      experience: "5+ Years",
      teachingExperience: "3+ Years",
      linkedIn: "ektanegi",
      image: "/assets/msmayank.jpg",
      description:
        "Expert in Python Expert. Has a strong background in statistics and mathematics.",
    },
    {
      name: "Ms Mayank Yadav",
      role: "Python Expert",
      company: "Fractal | Deloitte | Capgemini",
      experience: "5+ Years",
      teachingExperience: "3+ Years",
      linkedIn: "ektanegi",
      image: "/assets/msmayank.jpg",
      description:
        "Expert in Python Expert. Has a strong background in statistics and mathematics.",
    },
    {
      name: "Ms Mayank Yadav",
      role: "Python Expert",
      company: "Fractal | Deloitte | Capgemini",
      experience: "5+ Years",
      teachingExperience: "3+ Years",
      linkedIn: "ektanegi",
      image: "/assets/msmayank.jpg",
      description:
        "Expert in Python Expert. Has a strong background in statistics and mathematics.",
    },
  ];

  return (
    <div className="container faculty-section">
      <div className="row">
        <div className="col-12 text-center faculty-heading">
          <h2>Guidance by Experts: Our Esteemed Faculty</h2>
          <p>
            Experience excellence in mentorship from industry-leading
            professionals.
          </p>
        </div>
      </div>
      <div className="row">
        {facultyData.map((data, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card faculty-card">
              <img
                src={data.image}
                alt={data.name}
                className="img-fluid rounded-circle mb-3"
              />
              <h5>{data.name}</h5>
              <p>{data.role}</p>
              <div className="info-group">
                <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
                <span>{data.company}</span>
              </div>
              <div className="info-group">
                <FontAwesomeIcon icon="briefcase" className="icon" />
                <span>{data.experience}</span>
              </div>
              <div className="info-group">
                <FontAwesomeIcon icon="chalkboard-teacher" className="icon" />
                <span>{data.teachingExperience}</span>
              </div>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
