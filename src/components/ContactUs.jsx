import "./contactUs.css";
function ContactUs() {
  const formData = [
    {
      label: `Full Name *`,
      type: `text`,
      id: `fullName`,
      name: `Full Name`,
    },
    {
      label: `Email Address *`,
      type: `email`,
      id: `email`,
      name: `Email Address`,
    },
    {
      label: `Phone Number *`,
      type: `tel`,
      id: `phone`,
      name: `Phone Number`,
    },
  ];
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="contact-info">
              <h1 className="fw-bolder">Contact Us</h1>
              <p className="text-information">
                For any queries, Please reach out to us. Our Support team will
                get back to you within 24 hours.
              </p>
              <p>
                <i className="bi bi-envelope"></i> support@skillera.com
              </p>
              <p>
                <i className="bi bi-telephone"></i> +91 1234567890
              </p>
              <img
                className="img-fluid"
                src="/assets/contact-us.png"
                alt="Contact Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-container">
              <ul className="nav nav-tabs mb-3" id="contactTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <h4 className="fw-bolder txt-enquiry">Course Enquiry</h4>
                </li>
              </ul>
              <div className="tab-content" id="contactTabContent">
                <div>
                  <form action="https://formspree.io/f/xwpekgvg" method="post">
                    {formData.map((data, index) => (
                      <div className="mb-3" key={index}>
                        <label htmlFor="fullName" className="form-label">
                          {data.label}
                        </label>
                        <input
                          type={data.type}
                          name={data.name}
                          className="form-control"
                          id={data.id}
                          required
                        />
                      </div>
                    ))}
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Your Message *
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-danger">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
