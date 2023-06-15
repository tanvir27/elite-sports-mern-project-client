import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

import { router } from "./Routes/Router.jsx";
import AuthProvider from "./providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
// w-[90%] mx-auto 
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="website-color">
    <div className=" w-[90%] mx-auto ">
      <React.StrictMode>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </React.StrictMode>
    </div>
  </div>
);
