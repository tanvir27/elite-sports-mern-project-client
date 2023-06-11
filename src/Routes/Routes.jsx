import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";


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
      // {
      //   path: "signup",
      //   element: <SignUp></SignUp>,
      // },
    ],
  },
]);
