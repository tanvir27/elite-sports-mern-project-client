import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructor] = useState([]);
  useEffect(() => {
    fetch("https://server-site-green.vercel.app/users/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);
  return instructors;
};
export default useInstructors;
