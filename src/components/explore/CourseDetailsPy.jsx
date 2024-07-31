import "./CourseDetails1.css";

function CourseDetails() {
  const exploreContent = [
    {
      title: "Python Programming Language",
      text: `Master the essentials of Python programming with our comprehensive 20-hour course. Gain essential skills in Python syntax, data structures, and algorithm design. Learn advanced programming techniques, including web development, data analysis, and automation. Build practical projects to apply your knowledge and achieve your programming goals with confidence and efficiency.`,
      price: `₹1099`,
      btn: `Enroll Now`,
      img: `/assets/python-img.jpg`,
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
