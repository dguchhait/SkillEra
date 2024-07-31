import "./ourServices.css";
function OurServices() {
  const services = [
    {
      icon: `/assets/job.jpg`,
      title: `Affordable Online Courses `,
      description: `Affordable online courses along with learning communities.`,
    },
    {
      icon: `/assets/job.jpg`,
      title: `Experience Portal`,
      description: `A revolutionary self-paced experience portal.`,
    },
    {
      icon: `/assets/job.jpg`,
      title: `On-Demand Courses`,
      description: `Provide on-demand courses across technologies like data science.`,
    },
    {
      icon: `/assets/job.jpg`,
      title: `Personalized Learning Paths`,
      description: `Personalized learning paths to suit your learning style.`,
    },
    {
      icon: `/assets/job.jpg`,
      title: `Customized Learning Paths`,
      description: `Personalized learning paths to suit your learning style.`,
    },
    {
      icon: `/assets/job.jpg`,
      title: `Customized Learning Paths`,
      description: `Personalized learning paths to suit your learning style.`,
    },
  ];

  return (
    <>
      <div className="container text-center my-5">
        <h2 className="service-item-main">Our Services</h2>
      </div>

      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6" key={index}>
              <div className="service-item">
                <img src={service.icon} alt="Hands holding a dollar sign" />
                <div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default OurServices;
