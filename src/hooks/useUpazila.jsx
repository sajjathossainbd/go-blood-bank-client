import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

function useUpazila() {
  const axiosPublic = useAxiosPublic();
  const { data: upazila = [], isLoading: upazilaLoading } = useQuery({
    queryKey: ["upazila"],
    queryFn: async () => {
      const res = await axiosPublic.get("/upazila");
      return res.data;
    },
  });
  return [upazila, upazilaLoading];
}

export default useUpazila;
