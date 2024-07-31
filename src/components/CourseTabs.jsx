import { Link } from "react-router-dom";
import "./courseTabs.css";

function CourseTabs() {
  const techData = [
    {
      badge: `Bestseller`,
      title: `Python Programming Language`,
      img: `/assets/python-img.jpg`,
      text: `Job Assistance | Ticket to fast-tracked career growth in Python Programming (15 hrs Course)`,
      regDate: `Starts on 2 Sept 2024`,
      classStart: `20th December`,
      price: `₹1099`,
    },
    {
      badge: `Bestseller`,
      title: `Linux`,
      img: `/assets/Linux.jpg`,
      text: `Job Assistance | Ticket to fast-tracked career growth in Linux (15 hrs Course)`,
      regDate: `Starts on 2 Sept 2024`,
      classStart: `20th December`,
      price: `₹1099`,
    },
    {
      badge: `Bestseller`,
      title: `C Programming Languages | Programming Languages`,
      img: `/assets/C-Language.jpg`,
      text: `Program for individuals who wish to kickstart their career in the Private Banking Industry.`,
      regDate: `Starts on 2 Sept 2024`,
      classStart: `20th December`,
      price: `₹999`,
    },
    {
      badge: `Popular`,
      title: `Web Development- Html, CSS, and JavaScript `,
      img: `/assets/web-development.jpg`,
      text: `Job Assistance | Gain Web Development Expertise | Html, CSS, and JavaScript `,
      regDate: `Starts on 29 Jun 2024`,
      classStart: `20th December`,
      price: `₹1199`,
    },
    {
      title: `DSA- Data Structure and Algorithm`,
      img: `/assets/Dsa-img.jpg`,
      text: `Beging to Beyond Data Structure and Algorithm | Gain Web Development Expertise`,
      regDate: `Starts on 29 Jun 2024`,
      classStart: `20th December`,
      price: `₹999`,
    },
    {
      title: `Cloud Computing`,
      img: `/assets/cloud-img.jpg`,
      text: `Job Assistance | ticket to fast-tracked career growth in Cloud Computing `,
      regDate: `Starts on 29 Jun 2024`,
      classStart: `20th December`,
      price: `₹1299`,
    },
    {
      title: `Data Science With Excell`,
      img: `/assets/data-science-img.jpg`,
      text: `Job Assistance | ticket to fast-tracked career growth in Data Science `,
      regDate: `Starts on 29 Jun 2024`,
      classStart: `20th December`,
      price: `₹799`,
    },
  ];

  const nonTechData = [
    {
      badge1: `Bestseller`,
      title1: `Python Programming Language`,
      img1: `#`,
      text1: `Job Assistance | Ticket to fast-tracked career growth in Python Programming (15 hrs Course)`,
      regDate1: `Starts on 2 Sept 2024`,
      classStart1: `20th December`,
      price1: `₹1099`,
    },
    {
      badge1: `Bestseller`,
      title1: `Python Programming Language`,
      img1: `#`,
      text1: `Job Assistance | Ticket to fast-tracked career growth in Python Programming (15 hrs Course)`,
      regDate1: `Starts on 2 Sept 2024`,
      classStart1: `20th December`,
      price1: `₹1099`,
    },
    {
      badge1: `Bestseller`,
      title1: `Python Programming Language`,
      img1: `#`,
      text1: `Job Assistance | Ticket to fast-tracked career growth in Python Programming (15 hrs Course)`,
      regDate1: `Starts on 2 Sept 2024`,
      classStart1: `20th December`,
      price1: `₹1099`,
    },
    {
      badge1: `Bestseller`,
      title1: `Python Programming Language`,
      img1: `#`,
      text1: `Job Assistance | Ticket to fast-tracked career growth in Python Programming (15 hrs Course)`,
      regDate1: `Starts on 2 Sept 2024`,
      classStart1: `20th December`,
      price1: `₹1099`,
    },
    {
      badge1: `Bestseller`,
      title1: `Python Programming Language`,
      img1: `#`,
      text1: `Job Assistance | Ticket to fast-tracked career growth in Python Programming (15 hrs Course)`,
      regDate1: `Starts on 2 Sept 2024`,
      classStart1: `20th December`,
      price1: `₹1099`,
    },
    {
      badge1: `Bestseller`,
      title1: `Python Programming Language`,
      img1: `#`,
      text1: `Job Assistance | Ticket to fast-tracked career growth in Python Programming (15 hrs Course)`,
      regDate1: `Starts on 2 Sept 2024`,
      classStart1: `20th December`,
      price1: `₹1099`,
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Featured Courses</h1>
      <div className="mb-4" role="group" aria-label="Course Type">
        <button type="button" className="btn btn-outline-success">
          Tech Course
        </button>
      </div>

      <div className="row">
        {techData.map((course, index) => (
          <div className="col-md-4" key={index}>
            <div className="card course-card">
              <div className="position-relative">
                {course.badge && (
                  <span className="badge"> {course.badge} </span>
                )}
                <img
                  src={course.img}
                  className="card-img-top"
                  alt="Course Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.text}</p>
                <div className="d-flex justify-content-between">
                  <p>Registrations Started</p>
                  <p>
                    <a className="text-decoration-none text-danger" href="#">
                      {course.regDate}
                    </a>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Class Start on</p>
                  <p>
                    <a className="text-decoration-none text-danger" href="#">
                      {course.classStart}
                    </a>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Price</p>
                  <p>
                    <a className="text-decoration-none text-danger" href="#">
                      {course.price}
                    </a>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <Link
                    to="/CourseTabsDetails"
                    className="btn btn-outline-danger btn-explore"
                  >
                    Explore Course
                  </Link>
                  <Link to="/BuyTabsDetails" className="btn btn-danger btn-buy">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="mb-5 mt-5">Recorded Courses</h1>
      <div className="mb-4" role="group" aria-label="Course Type">
        <button type="button" className="btn btn-outline-success">
          Non-Tech Course
        </button>
      </div>

      <div className="row">
        {nonTechData.map((course, index) => (
          <div className="col-md-4" key={index}>
            <div className="card course-card">
              <div className="position-relative">
                {course.badge1 && (
                  <span className="badge"> {course.badge1} </span>
                )}
                <img
                  src={course.img1}
                  className="card-img-top"
                  alt="Course Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{course.title1}</h5>
                <p className="card-text">{course.text1}</p>
                <div className="d-flex justify-content-between">
                  <p>Registrations Started</p>
                  <p>
                    <a className="text-decoration-none text-danger" href="#">
                      {course.regDate1}
                    </a>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Class Start on</p>
                  <p>
                    <a className="text-decoration-none text-danger" href="#">
                      {course.classStart1}
                    </a>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Price</p>
                  <p>
                    <a className="text-decoration-none text-danger" href="#">
                      {course.price1}
                    </a>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <Link
                    to="/CourseTabsDetails"
                    className="btn btn-outline-danger btn-explore"
                  >
                    Explore Course
                  </Link>
                  <Link to="/BuyTabsDetails" className="btn btn-danger btn-buy">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseTabs;
