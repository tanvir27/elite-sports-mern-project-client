import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useContext(AuthContext);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res);
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
      }
    });
  };
  const handleMakeInstructor = (user) => {
    axiosSecure.patch(`/users/instructor/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
      }
    });
  };
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-10">
        Total User : {users?.length}
      </h1>
      <div className="overflow-x-auto  py-10 mx-10 rounded-lg shadow-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" bg-slate-800">
              <th></th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id} className=" border-b border-slate-300">
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{user?.name}</td>
                <td className="text-center">{user?.email}</td>
                <td className="text-center">
                  {user?.role == "admin"
                    ? "Admin"
                    : user?.role == "instructor"
                    ? "Instructor"
                    : "Student"}
                </td>
                <td className="  mt-3 space-x-2 text-center">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user?.role === "admin"}
                    className="btn btn-xs btn-warning  "
                  >
                    Make Admin
                  </button>{" "}
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user?.role === "instructor"}
                    className="btn btn-xs  btn-primary"
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
