import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../Customer/CustomerLayout";
import Home from "../Customer/pages/home/Home";
import About from "../Customer/pages/about/About";
import Destination from "../Customer/pages/destination/Destination";
import DestinationDetails from "../Customer/pages/destination/DestinationDetails";
import Contact from "../Customer/pages/contact/Contact";
import Blogs from "../Customer/pages/blogs/Blogs";
import BlogDetails from "../Customer/pages/blogs/BlogDetails";
import ClientTour from "../Customer/pages/clienttour/ClientTour";
import Termsandconditions from "../Customer/pages/details/Termsandconditions";
import Userprofile from "../Customer/pages/profile/Userprofile";
import Privacypolicy from "../Customer/pages/details/Privacypolicy";
import Travelpolicy from "../Customer/pages/details/Travelpolicy";
import Destination_india from "../Customer/pages/destination/Destination_india";
import Login from "../component/auth/Login";
import Dashboard from "../Admin/pages/dashboard/Dashboard";
import AdminLayout from "../Admin/AdminLayout";
import Package from "../Admin/pages/package/Package";
import Settings from "../Admin/pages/settings/Settings";
import HeroPage from "../Admin/pages/Hero/HeroPage";
import Vasan from "../Customer/surprice/Vasan";
import Register from "../Customer/pages/Surprice/Login/Register";
import { LoginPage, MadhaRegister } from "../Customer/pages/Surprice/Login/Register";
import Mail from "../Customer/pages/Surprice/mail/Mail";
import Enquiry from "../Customer/pages/Surprice/enquirey/Enquirey";
import Vaibhamvam from "../Customer/pages/Surprice/destination/Vaibhamvam";
import Madha from "../Customer/pages/madha/Madha";
import ComingSoon from "../Customer/pages/Coming/Comingsoon";
import Student from "../Customer/pages/Student/Student";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('admin_token'); // or your auth logic
  return isAuthenticated ? children : <Navigate to="/agent-login" />;
};

// Option 2: Remove ProtectedRoute if you don't need it yet
// const ProtectedRoute = ({ children }) => children;

// landing page
let client_routes = [
  {
    path: "/",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/Userprofile",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Userprofile /> }],
  },
  {
    path: "/aboutus",
    element: <CustomerLayout />,
    children: [{ index: true, element: <About /> }],
  },
  {
    path: "/destination",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Destination /> }],
  },
  {
    path: "/destination-india",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Destination_india /> }],
  },
  {
    path: "/destination-explore/:id",
    element: <CustomerLayout />,
    children: [{ index: true, element: <DestinationDetails /> }],
  },
  {
    path: "/contact",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Contact /> }],
  },
  {
    path: "/blogs",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Blogs /> }],
  },
  {
    path: "/privacypolicy",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Privacypolicy /> }],
  },
  {
    path: "/travelpolicy",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Travelpolicy /> }],
  },
  {
    path: "/termsandconditions",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Termsandconditions /> }],
  },
  {
    path: "/explore-blogs/:id",
    element: <CustomerLayout />,
    children: [{ index: true, element: <BlogDetails /> }],
  },
  {
    path: "/client-tour",
    element: <CustomerLayout />,
    children: [{ index: true, element: <ClientTour /> }],
  },
  {
    path: "/vasan-tour-package",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Vasan /> }],
  },
  {
    path: "/new-register",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Register /> }],
  },
  {
    path: "/madha-register",
    element: <CustomerLayout />,
    children: [{ index: true, element: <MadhaRegister /> }],
  },
  {
    path: "/Enquirey",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Mail /> }],
  },
  {
    path: "/Enquirey-view",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Enquiry /> }],
  },
  {
    path: "/vaibhavam/:id",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Vaibhamvam /> }],
  },
  {
    path: "/payanam/groupmadhu",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Madha /> }],
  },
  {
    path: "/students-tour-package",
    element: <CustomerLayout />,
    children: [{ index: true, element: <Student /> }],
  }
];


// dashboard
let admin_routes = [
  {
    path: "/agent-login",
    element: <Login />,
  },
  {
    path: "/admin-packages",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),    
    children: [{ index: true, element: <Package /> }],
  },
  {
    path: "/hero-page",
    element: <AdminLayout />,
    children: [{ index: true, element: <HeroPage /> }],
  },
  {
    path: "/settings",
    element: <AdminLayout />,
    children: [{ index: true, element: <Settings /> }],
  },
];

const router = createBrowserRouter([...client_routes, ...admin_routes]);

export default router;