import "./courseDetails.css";

function CourseDetails() {
  const exploreContent = [
    {
      title: "Linux Commands and Shell Scripting",
      text: `Discover the power of Linux and master the art of shell scripting in this 15-hour course. Learn to navigate the Linux OS, manage files and directories, and automate tasks efficiently using shell scripts. Boost your productivity and technical skills with hands-on exercises and real-world examples.`,
      price: `₹399`,
      btn: `Buy Now`,
      img: `https://www.freecodecamp.org/news/content/images/size/w2000/2023/03/Copy-of-Cast-a-Function-in-SQL---Convert-Char-to-Int-SQL-Server-Example.png`,
      link: 'BuyCourses',  // Add the link here
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
                    Videos accessible from 7th August 2024, Exam date 15th october 2024,
                    Certificate issuing date 20th october 2024
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
