import { Link } from "react-router-dom";
import "./ourCourses.css";

function OurCourses() {
  const techCourses = [
    {
      badge: "Bestseller",
      title: "Python Programming Language",
      img: "/assets/python-img.jpg",
      text: "Master Python programming in our intensive 15-hour course, covering everything from basics to advanced topics. Gain practical skills with hands-on projects and expert guidance to fast-track your career growth.",
      regDate: "Starts on 2 Sept 2024",
      classStart: "20th December",
      price: "₹1099",
      exploreLink: "ExploreCoursesPy",
      buyLink: "BuyPythonCourse",
    },
    {
      badge: "Bestseller",
      title: "C Programming Languages | Programming Languages",
      img: "/assets/C-Language.jpg",
      text: "Designed for individuals eager to launch a career in the Private Banking industry. Gain foundational skills and insights to thrive in this specialized field and enhance your professional prospects.",
      regDate: "Starts on 2 Sept 2024",
      classStart: "20th December",
      price: "₹999",
      exploreLink: "ExploreCoursesC",
      buyLink: "BuyCCourse",
    },
    {
      badge: "Popular",
      title: "Web Development- Html, CSS, and JavaScript",
      img: "/assets/web-development.jpg",
      text: "Enhance your web development skills with our comprehensive course covering HTML, CSS, and JavaScript. Build dynamic websites and boost your career prospects with practical, hands-on training.",
      regDate: "Starts on 29 Jun 2024",
      classStart: "20th December",
      price: "₹1199",
      exploreLink: "ExploreCoursesPy",
      buyLink: "BuyWebDevCourse",
    },
    {
      title: "DSA- Data Structure and Algorithm",
      img: "/assets/Dsa-img.jpg",
      text: "Explore comprehensive training from fundamental concepts to advanced techniques in data structures and algorithms, while also building essential skills in web development.",
      regDate: "Starts on 29 Jun 2024",
      classStart: "20th December",
      price: "₹999",
      exploreLink: "ExploreCoursesPy",
      buyLink: "BuyDSACourse",
    },
    {
      title: "Cloud Computing",
      img: "/assets/cloud-img.jpg",
      text: " Accelerate your career in Cloud Computing with our intensive course. Gain hands-on experience with leading cloud platforms and essential skills for a successful future in the field.",
      regDate: "Starts on 29 Jun 2024",
      classStart: "20th December",
      price: "₹1299",
      exploreLink: "ExploreCoursesPy",
      buyLink: "BuyCloudCourse",
    },
    {
      title: "Data Science With Excel",
      img: "/assets/data-science-img.jpg",
      text: "Unlock rapid career advancement in Data Science with our comprehensive course. Master essential data analysis techniques and tools to excel in this dynamic field.",
      regDate: "Starts on 29 Jun 2024",
      classStart: "20th December",
      price: "₹799",
      exploreLink: "ExploreCoursesPy",
      buyLink: "BuyDataScienceCourse",
    },
  ];

  const selfPacedCourses = [
    {
      title: "Linux commands and shell scripting",
      img: "https://www.freecodecamp.org/news/content/images/size/w2000/2023/03/Copy-of-Cast-a-Function-in-SQL---Convert-Char-to-Int-SQL-Server-Example.png",
      text: "Job Assistance | Ticket to fast-tracked career growth in Linux commands and shell scripting",
      regDate: "Starts on 7th August 2024",
      ExamDate: "15th October",
      price: "₹399",
      exploreLink: "ExploreCourses",
      buyLink: "BuyLinuxCourse",
    },
  ];

  const nonTechCourses = [
    {
      badge: "Bestseller",
      title: "Effective Communication Skill",
      img: "https://www.shutterstock.com/shutterstock/photos/2006172833/display_1500/stock-photo-office-people-teamwork-coworking-communication-and-brainstorming-colored-flat-illustration-2006172833.jpg",
      text: "Job Assistance | Ticket to fast-tracked career growth in Effective Communication Skill",
      regDate: "Starts on October 28 2024",
      classStart: "1st September",
      price: "₹249",
      exploreLink: "ExploreCourses1",
      buyLink: "BuyCommunicationCourse",
    },
    {
      badge: "Bestseller",
      title: "Leadership Fundamentals",
      img: "https://www.northmetrotafe.wa.edu.au/sites/default/files/styles/course_intro_image/public/course_images/Management_3_640x475.jpg?itok=zV-yhdDQ",
      text: "Program for individuals who wish to kickstart their career in leadership.",
      regDate: "Starts on October 28 2024",
      classStart: "1st September",
      price: "₹329",
      exploreLink: "ExploreCoursesL",
      buyLink: "BuyLeadershipCourse",
    },
    {
      badge: "Popular",
      title: "Personal Finance and Money Management",
      img: "https://life.futuregenerali.in/media/1113684/personal-financial-tips.jpg",
      text: "Gain financial literacy and manage your personal finances effectively.",
      regDate: "Starts on October 28 2024",
      classStart: "1st September",
      price: "₹299",
      exploreLink: "ExploreCoursesP",
      buyLink: "BuyFinanceCourse",
    },
    {
      title: "Stock Market",
      img: "https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=612x612&w=0&k=20&c=XRsOnrdHQIoqaolR00ganJACUpCxD4JCELt3N3Mm3tk=",
      text: "Learn the basics of stock market trading and investment.",
      regDate: "Starts on October 28 2024",
      classStart: "1st September",
      price: "₹375",
      exploreLink: "ExploreCoursesS",
      buyLink: "BuyStockMarketCourse",
    },
  ];

  const renderCourseCard = (course) => (
    <div className="col-md-4" key={course.title}>
      <div className="card course-card">
        <div className="position-relative">
          {course.badge && <span className="badge">{course.badge}</span>}
          <img src={course.img} className="card-img-top" alt="Course Image" />
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
          {course.classStart && (
            <div className="d-flex justify-content-between">
              <p>Class Start on</p>
              <p>
                <a className="text-decoration-none text-danger" href="#">
                  {course.classStart}
                </a>
              </p>
            </div>
          )}
          {course.ExamDate && (
            <div className="d-flex justify-content-between">
              <p>Exam Date</p>
              <p>
                <a className="text-decoration-none text-danger" href="#">
                  {course.ExamDate}
                </a>
              </p>
            </div>
          )}
          <div className="d-flex justify-content-between">
            <p>Price</p>
            <p>
              <a className="text-decoration-none text-danger" href="#">
                {course.price}
              </a>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <Link to={course.exploreLink}>
              <button className="btn btn-outline-danger">Explore</button>
            </Link>
            <Link to={course.buyLink}>
              <button className="btn btn-danger">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-3">
      <h2 className="mb-4">Our Tech Courses</h2>
      <h5 className="text-danger mb-4">Live Tech Courses</h5>
      <div className="row">
        {techCourses.map(renderCourseCard)}
      </div>
      <h5 className="text-danger mb-4 mt-5">Self-Paced Courses</h5>
      <div className="row">
        {selfPacedCourses.map(renderCourseCard)}
      </div>
      <h2 className="mb-4">Our Non-Tech Courses</h2>
      <h5 className="text-danger mb-4">Self-Paced Non-Tech Courses</h5>
      <div className="row">
        {nonTechCourses.map(renderCourseCard)}
      </div>
    </div>
  );
}

export default OurCourses;
