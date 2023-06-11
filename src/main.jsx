import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="website-color">
    <div className="w-[90%] mx-auto ">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  </div>
);
