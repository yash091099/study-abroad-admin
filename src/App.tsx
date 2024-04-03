import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/login";
import Reports from "./pages/reports";
import MainAdminScreen from "./pages/main-admin-screen";
import CourseManagement from "./pages/course-management";
import Add from "./pages/add";
import AddCourse from "./pages/add-course";
import VendorManagement from "./pages/vendor-management";
import UserInnerDetailsDocx from "./pages/user-inner-details-docx";
import UserInnerDetailsBank from "./pages/user-inner-details-bank";
import UserInnerDetailsBank1 from "./pages/user-inner-details-bank1";
import UserInnerDetailsPersonal from "./pages/user-inner-details-personal";
import DocumentUploadedByUser from "./pages/document-uploaded-by-user";
import ApplicationDetails from "./pages/application-details";
import ApplicationStatusPage from "./pages/application-status-page";
import ScholarshipManagement from "./pages/scholarship-management";
import UserManagement from "./pages/user-management";
import AdminChangePassword from "./pages/admin-change-password";
import BlogManagement from "./pages/blog-management";
import ApplicationManagement from "./pages/application-management";
import InstituteManagement from "./pages/user-management";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/notifications":
        title = "";
        metaDescription = "";
        break;
      case "/reports":
        title = "";
        metaDescription = "";
        break;
      case "/main-admin-screen":
        title = "";
        metaDescription = "";
        break;
      case "/course-management":
        title = "";
        metaDescription = "";
        break;
      case "/add":
        title = "";
        metaDescription = "";
        break;
      case "/addcourse":
        title = "";
        metaDescription = "";
        break;
      case "/vendor-management":
        title = "";
        metaDescription = "";
        break;
      case "/user-inner-details-docx":
        title = "";
        metaDescription = "";
        break;
      case "/user-inner-details-bank":
        title = "";
        metaDescription = "";
        break;
      case "/user-inner-details-bank1":
        title = "";
        metaDescription = "";
        break;
      case "/user-inner-details-personal":
        title = "";
        metaDescription = "";
        break;
      case "/documentuploadedbyuser":
        title = "";
        metaDescription = "";
        break;
      case "/applicationdetails":
        title = "";
        metaDescription = "";
        break;
      case "/applicationstatuspage":
        title = "";
        metaDescription = "";
        break;
      case "/scholarship-management":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
      case "/admin-change-password":
        title = "";
        metaDescription = "";
        break;
      case "/blogmanagement":
        title = "";
        metaDescription = "";
        break;
      case "/applicationmanagement":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/dashboard" element={<MainAdminScreen />} />
      <Route path="/course-management" element={<CourseManagement />} />
      <Route path="/add" element={<Add />} />
      <Route path="/addcourse" element={<AddCourse />} />
      <Route path="/student-management" element={<VendorManagement />} />
      <Route
        path="/user-inner-details-docx"
        element={<UserInnerDetailsDocx />}
      />
      <Route
        path="/user-inner-details-bank"
        element={<UserInnerDetailsBank />}
      />
      <Route
        path="/user-inner-details-bank1"
        element={<UserInnerDetailsBank1 />}
      />
      <Route
        path="/user-inner-details-personal"
        element={<UserInnerDetailsPersonal />}
      />
      <Route
        path="/documentuploadedbyuser"
        element={<DocumentUploadedByUser />}
      />
      <Route path="/applicationdetails" element={<ApplicationDetails />} />
      <Route
        path="/applicationstatuspage"
        element={<ApplicationStatusPage />}
      />
      <Route
        path="/scholarship"
        element={<ScholarshipManagement />}
      />
      <Route path="/institute-management" element={<InstituteManagement />} />
      <Route path="/admin-change-password" element={<AdminChangePassword />} />
      <Route path="/blog-management" element={<BlogManagement />} />
      <Route
        path="/applications"
        element={<ApplicationManagement />}
      />
    </Routes>
  );
}
export default App;
