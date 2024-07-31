import OurServices from "./OurServices";
import "./aboutPage.css";
function AboutPage() {
  const data = [
    {
      img: `/assets/msmayank.jpg`,
      name: `Ms Mayank Yadav`,
    },
    {
      img: `https://placehold.co/300x300`,
      name: `Nurendra Bhandarigal`,
    },
    {
      img: `https://placehold.co/300x300`,
      name: `Tarun Guleria`,
    },
    {
      img: `https://placehold.co/300x300`,
      name: `Mani Teja`,
    },
    {
      img: `https://placehold.co/300x300`,
      name: `Anish Kumar`,
    },
  ];

  const statCard = [
    {
      number: `13K`,
      title: `YouTube Community`,
    },
    {
      number: `25K`,
      title: `Happy Learners`,
    },
    {
      number: `100`,
      title: `Webinar & Sessions`,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h2 className="section-title">About Us</h2>
            <p>
              At <span className="highlight">Skillera</span>, we're here to help
              you <span className="highlight">become a pro</span> in skills that
              matter
            </p>
            <p>
              Our courses blend theory with hands-on workshops, where you tackle
              real world projects. This combo not only boosts your skills but
              also opens doors to new career paths. We cover all the latest tech
              trends, sharing insider knowledge from industry whizzes. Forget
              boring lectures; we're all about diving into projects headfirst.
            </p>
          </div>
        </div>

        <div className="row text-center mt-5">
          {statCard.map((stat, i) => (
            <div className="col-md-4" key={i}>
              <div className="stats-card">
                <h3>{stat.number}+</h3>
                <p>{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="section-title">Our Team</h2>
            <p className="quote">
              "Quality over Quantity" is our motto, always striving to give you
              the <span className="highlight">best learning journey</span> in
              various fields.
            </p>
            <div className="row justify-content-center">
              {data.map((data, index) => (
                <div className="col-md-3 profile-card" key={index}>
                  <img src={data.img} alt="error" />
                  <h3>{data.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <OurServices />
      </div>
    </>
  );
}
export default AboutPage;
