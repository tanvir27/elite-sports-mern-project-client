import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";

import EnrollClasses from "../pages/Dashboard/EnrollClasses/EnrollClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import MyClass from "../pages/Dashboard/InstructorRoute/MyClass";
import AddClass from "../pages/Dashboard/InstructorRoute/AddClass";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: (
          <PrivateRoute>
            <Instructors></Instructors>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "selectedclass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrollclass",
        element: <EnrollClasses></EnrollClasses>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myclass",
        element: <MyClass></MyClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageclasses",
        element: <ManageClasses></ManageClasses>,
      },
    ],
  },
]);
