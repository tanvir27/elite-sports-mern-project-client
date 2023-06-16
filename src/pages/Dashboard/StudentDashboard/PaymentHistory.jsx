import React, { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Payment History | Elite Sports </title>
      </Helmet>

      <div className="overflow-x-auto bg-slate-800 p-5 my-20 mx-10 rounded-lg shadow-xl">
        <table className="table ">
          <thead>
            <tr className="bg-black text-white">
              <td className="text-center"></td>
              <td className="text-center">Class Image </td>
              <td className="text-center">Class Name</td>

              <td className="text-center">Enroll Fee</td>
              <td className="text-center">Transaction Id</td>
              <td className="text-center">Payment Date</td>
            </tr>
          </thead>
          <tbody>
            {payments.map((data, index) => (
              <tr key={data._id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={data?.class?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-center">{data?.class?.name}</td>

                <td className="text-center">${data?.class?.price}</td>
                <td className="text-center font-semibold">
                  {data?.transactionId}
                </td>
                <td>{data?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
