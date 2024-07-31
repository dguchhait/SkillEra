import "./CourseDetails1.css";

function CourseDetails() {
  const exploreContent = [
    {
      title: "C Programming Languages | Programming Languages",
      text: `Unleash your coding potential in this comprehensive 20-hour C programming course. Learn essential programming skills, including syntax, control structures, data types, and memory management. Gain practical insights and tools to write efficient C code, solve complex problems, and develop robust applications with confidence.`,
      price: `₹999`,
      btn: `Enroll Now`,
      img: `/assets/C-Language.jpg`,
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
