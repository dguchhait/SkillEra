import "./CourseDetails1.css";

function CourseDetails() {
  const exploreContent = [
    {
      title: "Stock Market",
      text: `Master the art of personal finance in this comprehensive 20-hour course. Learn essential financial skills, including budgeting, saving strategies, debt management, and investment planning. Gain practical insights and tools to manage your money effectively, achieve your financial goals, and secure your financial future with confidence.`,
      price: `₹375`,
      btn: `Enroll Now`,
      img: `https://life.futuregenerali.in/media/1113684/personal-financial-tips.jpg`,
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
