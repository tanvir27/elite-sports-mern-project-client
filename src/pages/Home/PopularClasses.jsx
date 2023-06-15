import React from "react";
import useClasses from "../../hooks/useClasses";

const PopularClasses = () => {
  const [classes] = useClasses();
  const popularClasses = classes.sort((a, b) => b.enroll_students - a.enroll_students).slice(0, 6);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <h3 className="text-center text-3xl font-bold my-10">Popular Classes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {popularClasses.map((data) => (
          <div key={data._id} className="card card-compact  bg-slate-800 shadow-xl">
            <img
              className="h-[300px] rounded-2xl rounded-top object-cover object-center"
              src={data?.image}
              alt=""
            />
            <div className="card-body">
              <h2 className="card-title justify-center">{data?.class_name}</h2>
              <p>Enrolled Students: {data?.enroll_students}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
