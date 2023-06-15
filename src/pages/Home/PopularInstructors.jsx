import React from "react";
import useInstructors from "../../hooks/useInstructors";

const PopularInstructors = () => {
  const instructors = useInstructors();
  const popularInstructors = instructors?.slice(0, 6);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-20">
      <h3 className="text-center text-3xl font-bold my-10">Popular Instructors</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {popularInstructors.map((data) => (
          <div key={data._id} className="card card-compact  bg-slate-800 shadow-4xl">
            <figure>
              <img className="h-[400px] object-cover object-center" src={data?.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{data?.name}</h2>
              <p className="text-center">Email: {data?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
