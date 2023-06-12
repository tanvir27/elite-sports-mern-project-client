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
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
