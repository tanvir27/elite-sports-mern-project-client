import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("https://server-site-green.vercel.app/classes");
      return res.json();
    },
  });
  return [classes, refetch];
};
export default useClasses;
