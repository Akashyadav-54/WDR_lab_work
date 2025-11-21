import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// Home Page
import Home from "./pages/Home";

// Course Management
import CourseNavigationBar from "./coursemanagement/CourseNavigationBar";
import CourseRegistration from "./coursemanagement/CourseRegistration";
import CourseList from "./coursemanagement/CourseList";
import CourseDetails from "./coursemanagement/CourseDetails";
import CourseUpdate from "./coursemanagement/CourseUpdate";
import CourseDelete from "./coursemanagement/CourseDelete";

//Faculty Management
import FacultyNavigationBar from "./facultymanagement/FacultyNavigationBar";
import FacultyRegistration from "./facultymanagement/FacultyRegistration";
import FacultyList from "./facultymanagement/FacultyList";
import FacultyProfile from "./facultymanagement/FacultyProfile";
import FacultyUpdate from "./facultymanagement/FacultyUpdate";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Course Routes */}
        <Route path="/courses" element={<CourseNavigationBar />} />
        <Route path="/courses/register" element={<CourseRegistration />} />
        <Route path="/courses/list" element={<CourseList />} />
        <Route path="/courses/details" element={<CourseDetails />} />
        <Route path="/courses/update" element={<CourseUpdate />} />
        <Route path="/courses/delete" element={<CourseDelete />} />

        {/* Faculty Routes */}
        <Route path="/faculty" element={<FacultyNavigationBar />} />
        <Route path="/faculty/register" element={<FacultyRegistration />} />
        <Route path="/faculty/list" element={<FacultyList />} />
        <Route path="/faculty/profile" element={<FacultyProfile />} />
        <Route path="/faculty/update" element={<FacultyUpdate />} />

        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App