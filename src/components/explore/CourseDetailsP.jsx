import "./CourseDetails1.css";

function CourseDetails() {
  const exploreContent = [
    {
      title: "Personal Finance and Money Management",
      text: `Master the art of stock market investing in this comprehensive 20-hour course. Learn essential skills, including market analysis, investment strategies, risk management, and trading techniques. Gain practical insights and tools to navigate the stock market effectively, build a successful investment portfolio, and achieve your financial objectives with confidence.`,
      price: `₹299`,
      btn: `Enroll Now`,
      img: `https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=612x612&w=0&k=20&c=XRsOnrdHQIoqaolR00ganJACUpCxD4JCELt3N3Mm3tk=`,
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
