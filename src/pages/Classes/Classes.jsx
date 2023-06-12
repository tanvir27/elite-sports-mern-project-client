import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  return (
    <div>
      <Helmet>
        <title>Elite Sports | Classes </title>
      </Helmet>

      <SectionTitle heading={"Our Classes"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="w-full p-4">
          <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div>
              <img
                src="https://img.freepik.com/free-photo/full-shot-girl-training-gym_23-2150422464.jpg?size=626&ext=jpg"
                alt={name}
                className="w-full h-50 object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-3xl font-semibold font-serif mb-2">
                Soccer Training
              </h2>
              <p className="text-gray-300 text-xl font-serif mb-2">
                Instructor: John Dow
              </p>
              <p className="text-gray-300 font-serif  text-xl mb-2">
                Available Seats: 50
              </p>
              <p className="text-gray-300 text-xl font-serif mb-2">
                Price: $50
              </p>
              <button className="btn btn-outline font-serif border-0 border-b-2  bg-slate-900 tracking-[3px] text-emerald-100">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
