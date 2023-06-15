import React from "react";
import { Helmet } from "react-helmet-async";
import useInstructors from "../../hooks/useInstructors";

const Instructor = () => {
  const instructors = useInstructors();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <Helmet>
        <title>Instructors | Elite Sports</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:my-20">
        {instructors.map((data) => (
          <div
            key={data._id}
            className="card flex-shrink-0 border shadow-2xl  bg-base-900"
          >
            <figure>
              <img
                className="h-[400px] object-cover object-center"
                src={data?.image}
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl mx-auto text-center  font-semibold font-serif">
                Name: {data?.name}
              </h2>
              <p className="font-semibold text-center font-serif">Email: {data?.email} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
