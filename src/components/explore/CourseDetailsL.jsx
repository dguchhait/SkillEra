import "./CourseDetails1.css";

function CourseDetails() {
  const exploreContent = [
    {
      title: "Leadership Fundamentals",
      text: `Unleash your leadership potential in this 20-hour course. Learn essential leadership skills, including effective communication, team management, decision-making, and conflict resolution. Gain practical insights and tools to lead with confidence and make a positive impact in your organization.`,
      price: `₹329`,
      btn: `Enroll Now`,
      img: `https://www.northmetrotafe.wa.edu.au/sites/default/files/styles/course_intro_image/public/course_images/Management_3_640x475.jpg?itok=zV-yhdDQ`,
      link: 'EnrollCourses',  // Add the link here
    },
  ];

  return (
    <div className="course-section explore-background">
      <div className="container explore-content">
        <div className="row">
          {exploreContent.map((data, index) => (
            <div className="row align-items-center explore-content-space" key={index}>
              <div className="col-md-6 mt-3">
                <h1>{data.title}</h1>
                <p>{data.text}</p>
                <div className="price">{data.price}</div>
                <div>
                  <p className="class-update">
                    Videos accessible from 7th August 2024, Exam date 15th October 2024,
                    Certificate issuing date 20th October 2024
                  </p>
                </div>

                <div className="mt-3">
                  <a href={data.link} className="btn btn-danger">{data.btn}</a>
                </div>
              </div>

              <div className="col-md-5 mt-3 mb-3">
                <div className="card card-img">
                  <img
                    src={data.img}
                    className="card-img-top"
                    alt="Course Image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
