import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Feedback = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const feedback = data.feedback;
    axiosSecure.patch(`/classes/feedback/${id}`, { feedback }).then((res) => {
      if (res.data.modifiedCount) {
        reset();
        Swal.fire({
          icon: "success",
          title: "FeedBack Sent successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="md:w-10/12 mx-auto">
      <Helmet>
        <title> Feedback | Elite Sports </title>
      </Helmet>

      <div className="bg-base-300 shadow-2xl my-20 p-10 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            type="textarea"
            className="input input-bordered mt-2 w-full h-48"
            placeholder="Write feedback for denied"
            {...register("feedback")}
          />
          <br />
          <input
            type="submit"
            className="btn btn-neutral mt-2 w-full"
            value="Send Feedback"
          />
        </form>
      </div>
    </div>
  );
};
export default Feedback;
