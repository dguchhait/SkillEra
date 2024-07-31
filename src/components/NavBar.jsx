import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand iconSkillera" href="#">
            Skillera
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center iconNavbar"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link titleColor"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link titleColor"
                  aria-current="page"
                  to="/CourseTabs"
                >
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link titleColor"
                  aria-current="page"
                  to="/AboutPage"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link titleColor"
                  aria-current="page"
                  to="/ContactUs"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet /> {/* Ensure Outlet is placed here */}
    </>
  );
}

export default NavBar;
