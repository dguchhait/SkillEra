import "./courseOffering.css";
function CourseOffering() {
  const courseOfferingData = [
    {
      icon: `#`,
      name: `Diverse Project Portfolio + Capstone`,
    },
    {
      icon: `#`,
      name: `Doubt Clearing Sessions`,
    },
    {
      icon: `#`,
      name: `Industry Oriented Curriculum`,
    },
    {
      icon: `#`,
      name: `Practice Exercises`,
    },
    {
      icon: `#`,
      name: `Skillera Lab For Coding`,
    },
    {
      icon: `#`,
      name: `Industry Recognized Certificate`,
    },
    {
      icon: `#`,
      name: `Q&A Forum`,
    },
    {
      icon: `#`,
      name: `Module Level Assignments`,
    },
    {
      icon: `#`,
      name: `Instructor Led Sessions`,
    },
    {
      icon: `#`,
      name: `Interview Opportunities`,
    },
    {
      icon: `#`,
      name: `Community Networking`,
    },
    {
      icon: `#`,
      name: `Email Support`,
    },
  ];
  return (
    <>
      <div className="container offerings-section">
        <div className="row">
          <div className="col-12">
            <h2>Unlock Your Potential: Exclusive Course Offerings</h2>
          </div>
        </div>

        <div className="row">
          {courseOfferingData.map((data, i) => (
            <div className="col-md-4 col-sm-6 mb-4" key={i}>
              <div className="card text-center">
                <img src={data.icon} alt="Icon" />
                <p className="course-offering-heading">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default CourseOffering;
