import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

function useDistric() {
  const axiosPublic = useAxiosPublic();
  const { data: distric = [], isLoading: districLoading } = useQuery({
    queryKey: ["distric"],
    queryFn: async () => {
      const res = await axiosPublic.get("/distric");
      return res.data;
    },
  });
  return [distric, districLoading];
}

export default useDistric;
