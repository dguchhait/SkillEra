import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer Footer-page">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <h2 className="footer-title">SKILLS</h2>
              <p>
                <a href="mailto:support@pwskills.com">
                  <i className="bi bi-envelope"></i> support@skillera.com
                </a>
              </p>
              <p>
                <a href="tel:+91 9418478226">
                  <i className="bi bi-telephone"></i> +91 9418478226
                </a>
              </p>
              <div className="social-icons">
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#">
                  <i className="bi bi-telegram"></i>
                </a>
              </div>
              <div className="certified-badge">
                <img src="#" alt="Certified ISO 9001:2015" />
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h2 className="footer-title">Company</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h2 className="footer-title">Products</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Skillera Lab</a>
                </li>
                <li>
                  <a href="#">Experience Portal</a>
                </li>
                <li>
                  <a href="#">Hall Of fame</a>
                </li>
                <li>
                  <a href="#">Job Portal</a>
                </li>
                <li>
                  <a href="#">Become an affiliate</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
