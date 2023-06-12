import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrash, FaAmazonPay } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
const MyClass = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Elite Sports | My Class </title>
      </Helmet>
      <SectionTitle heading={"My Selected Class"}></SectionTitle>
      <div className="overflow-x-auto w-full bg-slate-800 md:ml-4">
        <table className="table table-zebra w-full ">
          {/* head */}
          <thead>
            <tr className="bg-gray-700 text-lime-300">
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Actions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>$ 50</td>
              <td>
                <button className="btn bg-slate-700 text-white">
                  {" "}
                  <FaTrash />
                </button>
              </td>
              <td>
                <button className="btn bg-slate-700 text-white">
                  {" "}
                  <MdPayment />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
