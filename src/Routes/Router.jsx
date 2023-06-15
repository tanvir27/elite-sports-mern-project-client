import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Navbar/Instructor";
import Classer from "../Pages/Navbar/Classer";
import Login from "../Athonticatin_user/Login/Login";
import Register from "../Athonticatin_user/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../Pages/Dashboard/AminDashboard/ManageUser";
import ManageClasses from "../Pages/Dashboard/AminDashboard/ManageClasses";
import BookedClasses from "../Pages/Dashboard/StudentDashboard/BookedClasses";
import EnrollClass from "../Pages/Dashboard/StudentDashboard/EnrollClass";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses";
import Feedback from "../Pages/Dashboard/AminDashboard/Feedback";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructor></Instructor>,
      },
      {
        path: "/classes",
        element: <Classer></Classer>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/manageuser",
        element: (
          <AdminRoutes>
            <ManageUser></ManageUser>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/manageclasses",
        element: (
          <AdminRoutes>
            <ManageClasses></ManageClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/bookedclasses",
        element: <BookedClasses />,
      },
      {
        path: "/dashboard/enrollclass",
        element: <EnrollClass />,
      },
      {
        path: "/dashboard/addclass",
        element: <AddClass />,
      },
      {
        path: "/dashboard/myclasses",
        element: <MyClasses />,
      },
      {
        path: "/dashboard/feedback/:id",
        element: <Feedback />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);
