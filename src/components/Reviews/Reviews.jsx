import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="py-2 my-6">
      <h1 className="text-color font-bold text-4xl text-center mb-6 md:mb-12">
        <i>
          {" "}
          <span>Happy</span> <span className="text-warning"> Clients says</span>
        </i>
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="text-center px-6 rounded-xl py-10 bg-slate-800">
          <div className="mb-6">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGUlMjBpbWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="rounded-full mx-auto"
              alt="Client"
              style={{ height: "100px", width: "100px" }}
            />
          </div>
          <p className="mt-3">
            "I absolutely love the toy cars I purchased from this website. The
            quality is outstanding, and the attention to detail is impressive.
            My kids are having a blast playing with them, and I'm thrilled with
            the excellent customer service I received. Highly recommended!"
          </p>
          <div className="my-3 flex justify-center items-center text-warning">
            <div className="flex  space-x-1">
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
          <div>
            <p className="text-color text-2xl font-semibold">John Doe</p>
            <p className="text-color  font-semibold">Doctor</p>
          </div>
        </div>
        <div className="text-center px-6 rounded-xl py-10 bg-slate-800">
          <div className="mb-6">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1617441356293-de82acf3552f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full mx-auto"
              alt="Client"
              style={{ height: "100px", width: "100px" }}
            />
          </div>
          <p className="mt-3">
            "I absolutely love the toy cars I purchased from this website. The
            quality is outstanding, and the attention to detail is impressive.
            My kids are having a blast playing with them, and I'm thrilled with
            the excellent customer service I received. Highly recommended!"
          </p>
          <div className="my-3 flex justify-center items-center text-warning">
            <div className="flex  space-x-1">
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStarHalfAlt className="h-6 w-6 text-yellow-500" />
            </div>
          </div>

          <div>
            <p className="text-color text-2xl font-semibold">William Harry</p>
            <p className="text-color font-semibold">Software Developer</p>
          </div>
        </div>
        <div className="text-center px-6 rounded-xl py-10 bg-slate-800">
          <div className="mb-6">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full mx-auto"
              alt="Client"
              style={{ height: "100px", width: "100px" }}
            />
          </div>
          <p className="mt-3">
            "I absolutely love the toy cars I purchased from this website. The
            quality is outstanding, and the attention to detail is impressive.
            My kids are having a blast playing with them, and I'm thrilled with
            the excellent customer service I received. Highly recommended!"
          </p>
          <div className="my-3 flex justify-center items-center text-warning">
            <div className="flex  space-x-1">
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
              <FaStar className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
          <div>
            <p className="text-color text-2xl font-semibold">Harry state</p>
            <p className="text-color font-semibold">Banker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
