import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import CourseTabs from "./CourseTabs";
import AboutPage from "./AboutPage";
import ContactUs from "./ContactUs";
import ExploreCourses from "./explore/ExploreCourses";
import ExploreCourses1 from "./explore/ExploreCourses1";
import ExploreCoursesL from "./explore/ExploreCoursesL";
import ExploreCoursesP from "./explore/ExploreCoursesP";
import ExploreCoursesS from "./explore/ExploreCoursesS";
import ExploreCoursesPy from "./explore/ExploreCoursesPy";
import ExploreCoursesC from "./explore/ExploreCoursesC";
import CourseTabsDetails from "./explore/CourseTabsDetails";
import BuyNowPage from "./buyPage/BuyNowPage";
import BuyTabDetails from "./buyPage/BuyTabDetails";

function SectionPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="CourseTabs" element={<CourseTabs />} />
          <Route path="AboutPage" element={<AboutPage />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="ExploreCourses" element={<ExploreCourses />} />
          <Route path="ExploreCourses1" element={<ExploreCourses1 />} />
          <Route path="ExploreCoursesL" element={<ExploreCoursesL />} />
          <Route path="ExploreCoursesP" element={<ExploreCoursesP />} />
          <Route path="ExploreCoursesS" element={<ExploreCoursesS />} />
          <Route path="ExploreCoursesPy" element={<ExploreCoursesPy />} />
          <Route path="ExploreCoursesC" element={<ExploreCoursesC />} />
          <Route path="Courses" element={<CourseTabs />} />
          <Route path="Counsellor" element={<ContactUs />} />
          <Route path="CourseTabsDetails" element={<CourseTabsDetails />} />
          <Route path="BuyCourses" element={<BuyNowPage />} />
          <Route path="BuyTabsDetails" element={<BuyTabDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default SectionPage;
