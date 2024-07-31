import AboutcoursePy from "./AboutcoursePy";
import CourseDetailsPy from "./CourseDetailsPy";
import CourseDetails from "./CourseDetails";
import CurriculumPy from "./CurriculumPy";
import FaqPy from "./FaqPy";


import CourseOffering from "./CourseOffering";
import ProjectSection from "./ProjectSection";

import StatCards from "./StatCards";
import Faculty from "./Faculty";

function ExploreCourses() {
  return (
    <>
      <CourseDetailsPy />
      <AboutcoursePy />
      <CurriculumPy/>
      <FaqPy/>
    </>
  );
}
export default ExploreCourses;
