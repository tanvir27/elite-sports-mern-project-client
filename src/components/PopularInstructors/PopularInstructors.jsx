import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const PopularInstructors = () => {
  return (
    <div>
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="w-full p-4 text-center">
          <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden ">
            <img
              src="https://img.freepik.com/free-photo/full-shot-girl-training-gym_23-2150422464.jpg?size=626&ext=jpg"
              alt="John Doe"
              className="w-full h-full object-cover "
            />
            <div className="py-5">
              <h2 className="text-2xl mx-auto text-center md:w-4/12 font-semibold font-serif pt-2 border-t">
                John Doe
              </h2>
              <p className="text-lg font-serif">johnde@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
