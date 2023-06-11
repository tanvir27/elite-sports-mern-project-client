import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        className="md:w-auto rounded"
        src="https://i.ibb.co/4VhXwfP/Error-Page-removebg-preview.png"
        alt=""
      />
      <h1 className="md:text-5xl text-2xl font-bold mb-2">
        Oops! Page not found
      </h1>
      <p className=" text-center mb-8">
        We're sorry, but the page you requested could not be found
      </p>
      <Link
        to="/"
        className="bg-teal-900 hover:bg-teal-600 font-bold py-2 px-4 rounded-full"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
