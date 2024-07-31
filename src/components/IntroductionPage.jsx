import { Link } from "react-router-dom";
import "./introductionpage.css";
function IntroductionPage() {
  return (
    <>
      <div className="Header-explore">
        <div className="Header-content-explore">
          <h5>Welcome to Skillera</h5>
          <h1>Where Learning Meets The Expectation</h1>
          <p>
            At Skillera, we are Revolutionising your journey of stepping your
            first foot into your Career through our college programs with
            partnering up with Top Tier Colleges
          </p>
          <div className="btm-card">
            <Link to="Courses" className="btm-left-side">
              Explore Course
            </Link>

            <Link to="Counsellor" className="btm-right-side">
              Talk to counsellor
            </Link>
          </div>
        </div>
        <div className="png-explore">
          <img src="/assets/books-Explore.png" alt="error" />
        </div>
      </div>
    </>
  );
}
export default IntroductionPage;
