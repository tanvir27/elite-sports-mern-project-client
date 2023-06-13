import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const AddClass = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full md:ml-5">
      <Helmet>
        <title>Elite Sports | Instructors </title>
      </Helmet>
      <SectionTitle heading={"ADD CLASS"}></SectionTitle>

      {/* form */}
      <div className="flex md:mt-28 justify-center items-center bg-slate-800">
        <form
          className="w-full md:mx-10 mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="className"
                >
                  Class Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="className"
                  type="text"
                  placeholder="Enter class name"
                  {...register("className", { required: true })}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="classImage"
                >
                  Class Image
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="classImage"
                  type="text"
                  placeholder="Enter class image URL"
                  {...register("classImage", { required: true })}
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="instructorName"
                >
                  Instructor Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="instructorName"
                  type="text"
                  readOnly
                  value="John Doe"
                  {...register("instructorName")}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="instructorEmail"
                >
                  Instructor Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="instructorEmail"
                  type="text"
                  readOnly
                  value="john.doe@example.com"
                  {...register("instructorEmail")}
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="availableSeats"
                >
                  Available Seats
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="availableSeats"
                  type="number"
                  placeholder="Enter available seats"
                  {...register("availableSeats", { required: true })}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-sm font-bold mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="number"
                  placeholder="Enter price"
                  {...register("price", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="flex mb-5 justify-center">
            <button
              className="btn btn-outline font-serif border-0  bg-slate-700 tracking-[2px]  text-emerald-100 w-full md:w-[25%]"
              type="submit"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
