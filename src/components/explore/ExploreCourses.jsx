import AboutCourse from "./AboutCourse";
import CourseDetails from "./CourseDetails";
import Curriculum from "./Curriculum";
import Faq from "./Faq";


import CourseOffering from "./CourseOffering";
import ProjectSection from "./ProjectSection";
import "./exploreCourses.css";
import StatCards from "./StatCards";
import Faculty from "./Faculty";

function ExploreCourses() {
  return (
    <>
      <CourseDetails />
      <AboutCourse />
      <Curriculum/>
      <Faq/>
    </>
  );
}
export default ExploreCourses;
